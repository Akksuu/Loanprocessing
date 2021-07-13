import './App.css';
import {BrowserRouter as Router,Route,Link,Switch, Redirect}from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Login from './components/login/Login';
import News from './components/news/News';
import Services from './components/services/Services';
import Signin from './components/signin/Signin';
import Account from './components/account/Account';
import Transcations from './components/transcations/Transcations';
import Makeloan from './components/makeloan/Makeloan';
import Payloan from './components/payloan/Payloan';
import Contactdetails from './components/contactdetails/Contactdetails';
import Logout from './components/logout/Logout';
import Application from './components/applicationform/Application';
import Header from './components/header';
import Accountdetails from './components/accountdetails/Accountdetails';
var name='sushma';
//gaurding
const isAuthenticated = true;
function App() {
  return (
    <Router>
   
    <div className="App">
  <Switch>
  
  <Route exact path="/home" component={Home} />
   Guarding Routes 
  
  {isAuthenticated ?
  
    <div>
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route path="/services" component={Services} />
    <Route path="/news" component={News} />
    <Route path="/login" component={Login} />
    <Route path="/about" component={About} />
    <Route path="/signin" component={Signin} />
    <Route path="/account" component={Account} />
    <Route path="/transcations" component={Transcations} />
    <Route path="/makeloan" component={Makeloan} />
    <Route path="/payloan" component={Payloan} />
    <Route path="/contactdetails" component={Contactdetails} />
    <Route path="/logout" component={Logout} />
    <Route path="/accountdetails" component={Accountdetails} />  
    <Route path="/applicationform" component={Application} />
    
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