import React from 'react';
import './Signin.css';

export default function Signin() {


 return (
     <div>
     <h1>create your accounts by filling the form </h1>
        <div className="innerdiv" >
        <table>
        <tr>
        <label className="label"><strong>first name</strong></label>
        <th>
        <input  className="inputbox" type="text" placeholder="enter first Name"></input>
        </th>
        </tr>
        <tr>
        <label className="label"><strong>last name</strong></label>
        <th>
        <input className="inputbox" type="text" placeholder="enter Last Name"></input>
        </th>
        </tr>
        <tr>
        <label className="label"><strong>Phone Number</strong></label>
        <th>
        <input className="inputbox" type="Number" placeholder="enter Phone number"></input>
        </th>
        </tr>
        <tr>
        <label className="label"><strong>Email Id</strong></label>
        <th>
        <input className="inputbox" type="text" placeholder="enter Email Id"></input>
        </th>
        </tr>
        <tr>
        <label className="label"><strong>Age</strong></label>
        <th>
        <input className="inputbox" type="number" placeholder="enter age"></input>
        </th>
        </tr>
        <tr>
        <label className="label"><strong>gender</strong></label>
        <th>
        <input type="radio" name="a" value="male"></input>
        <input type="radio" name="a" value="male"></input>
        <input type="radio" name="a" value="male"></input>
        </th>
        </tr>
        <tr>
        <label className="label"><strong>Aadhar number</strong></label>
        <th>
        <input className="inputbox" type="text" placeholder="enter Adhar Number"></input>
        </th>
        </tr>
        <tr>
        <label className="label"><strong>Pan number</strong></label>
        <th>
        <input className="inputbox" type="text" placeholder="enter Pan number"></input>
        </th>
        </tr>
        <tr>
        <label className="label"><strong>Education</strong></label>
        <th>
        <input type="text" placeholder="enter education"></input>
        </th>
        </tr>
        <tr>
        <label className="label"><strong>state</strong></label>
        <th>
        <input className="inputbox" type="text" placeholder="enter state"></input>
        </th>
        </tr>
        <tr>
        <label className="label"><strong>Address</strong></label>
        <th>
        <textarea type="text" placeholder="enter Address"></textarea>
        </th>
        </tr>
        </table>
        </div>
        <button type="submit" >submit</button>
        </div>
    )
}
