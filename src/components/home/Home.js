
import React from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';
export default function Home() {
    let history=useHistory();
    return (
    
        <div>
        <marquee><h1>Welcome to the bank</h1></marquee>
       <p>
       Welcome to the Smart Bank!!!
       </p>
       <forms>

      <h1>for more benfits login to your account</h1>
      <button type='submit' class="btn btn-primary" color='primary' variant="contained" 
      onClick={() =>{ history.push('/Login');}} >Login</button>

       </forms>

       <marquee><h1>for more details  visit our bank </h1></marquee>
        </div>

    ) 
}  
