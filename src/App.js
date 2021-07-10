
import './App.css';
import {BrowserRouter as Router,Route,Link,Switch, Redirect}from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Login from './components/login/Login';
import News from './components/news/News';
import Services from './components/services/Services';
import FAQ from './components/faq/FAQ';
import Help from './components/help/Help';
import Signin from './components/signin/Signin';
import Account from './components/account/Account';
import Transcations from './components/transcations/Transcations';
import Makeloan from './components/makeloan/Makeloan';
import Payloan from './components/payloan/Payloan';
import Contactdetails from './components/contactdetails/Contactdetails';
import Logout from './components/logout/Logout';

var name='sushma';
//gaurding
const isAuthenticated = true;
function App() {
  return (
    <Router>
    <div className="App">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <Link class="navbar-brand" href="#">Smart bank</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
          <Link class="nav-link" to="/news">News</Link>
          <Link class="nav-link" to="/about">About us</Link>
          <Link class="nav-link" to="/services">Services</Link>
          <Link class="nav-link" to="/contact">Contact us</Link>
          <Link class="nav-link" to="/faq">Faq</Link>
          <Link class="nav-link" to="/help">Help</Link>
          <Link class="nav-link" to="/signin">Signin</Link>
        
         

        </div>
      </div>
    </div>
  </nav>


  <Switch>
  
  <Route exact path="/home" component={Home} />
   Guarding Routes 
  
  {isAuthenticated ?
  
    <div>
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route path="/services" component={Services} />
    <Route path="/news" component={News} />
    <Route exact path="/login" component={Login} />
    <Route path="/about" component={About} />
    <Route path="/faq" component={FAQ} />
    <Route path="/help" component={Help} />
    <Route path="/signin" component={Signin} />
    <Route path="/account" component={Account} />
    <Route path="/transcations" component={Transcations} />
    <Route path="/makeloan" component={Makeloan} />
    <Route path="/payloan" component={Payloan} />
    <Route exact path="/contactdetails" component={Contactdetails} />
    <Route path="/faq" component={FAQ} />
    <Route path="/help" component={Help} />
    <Route path="/logout" component={Logout} />
    
  </div>
  :
    <Redirect to="/home" />
    
  }
  
  </Switch>
</div>
</Router>
   
  );
}

export default App;