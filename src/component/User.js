import React, { Component } from 'react';

import '../styles/users.css'
import '../styles/home.css'
import { Link } from 'react-router-dom';
function User  (props) {
    
        return <div>
            <ul>
  <li><a  href="/">Home</a></li>
 
 
  <Link to="/"><li className="Logout"><a href="/">Logout</a></li></Link>

  <Link to="/users"> <li><a href="/users">Users</a></li> </Link>


</ul>
            <h3> All users </h3>
            <table>
                <thead>
                    <th>Fullname</th>
                   
                    <th>Email</th>
                    
                </thead>
                <tbody>
                {props.users.map((user, index) => <tr key={index}>
                    <td>{user.fullName}</td>
                   
                    <td>{user.email}</td>
                    
                </tr>)}
                </tbody>
            </table>
         
        </div>;
    }

 
export default User;