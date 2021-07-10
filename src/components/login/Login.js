

import React from 'react';
import './Login.css';
import { useHistory } from 'react-router';

export default function Login() {
     let history=useHistory();

 return (
 <div>
 <h1>smart bank!!!</h1>
 <h2> login with your details</h2>
 <marquee><strong>Enter your details properly</strong></marquee>
 <div >
 <table >
 <tr><tr>
 <br></br><br></br>
 <label className="label"><strong>UserName</strong></label><th><br></br><br></br>
 <input className="input" type="text" placeholder="Enter UserName"></input> </th>
 </tr><br></br>
 <tr>
 <label className="label"><strong>Password</strong></label><th>
 <input className="input" type="text" placeholder="Enter UserName"></input></th></tr>
 <br></br>
 <tr>
 <th><th></th>
 <button type='submit' className="label1" class="btn btn-primary" color='primary' variant="contained" 
      onClick={() =>{ history.push('/Account');}} >Login</button>

</th></tr>
 <tr><th>
 <a className="label2" href='change password'><strong>forgot password?</strong></a></th>
      <th>
 <a className="label3" href='signin'><strong>Sign in</strong></a> </th></tr>
 </tr>
 </table>

 
 </div>
 </div>
 )
}




