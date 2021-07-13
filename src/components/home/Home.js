
import React from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';
import Header from '../header';
export default function Home() {
    let history=useHistory();
    return (
    
        <div>
        <Header />
        <marquee><h1>Welcome to the bank</h1></marquee>
       
       <forms>

      <button type='submit'  className="details" class="btn btn-primary" color='primary' variant="contained" 
      onClick={() =>{ history.push('/Login');}} >Login</button>

       </forms>

      

        </div>

    ) 
}  
