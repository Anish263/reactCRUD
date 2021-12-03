
import React, { useEffect } from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Home from './Home'
import '../styles/Profile.css';
import '../styles/home.css'
function Update(props){


const [id,setId]=useState(Number);
const [loginuser,setLoginuser]=useState({"fullName":"",
"email":"", "userName":"","password":""});
   
useEffect (()=>{
    let path = window.location.href;
        path = Number(path.split("/")[4]);
        console.log(props.users);
        let users=props.users
        console.log(users);
        let user = users.filter((user) => user.id === path);
        console.log(user[0]);
        setLoginuser(user[0]);
        console.log(loginuser);
         setId(path);
         console.log(id,path);
            
        
        
},[])

 const  deleteUser=()=> {
        props.onDelete(id)

    }


 const   handleChange=(event)=>{
        console.log(event.target.value);
        let value=event.target.value;
        let fullName= event.target.name;
        setLoginuser((prevalue)=>{
            return {
                ...prevalue,
                [fullName]:value
            }
        })
    }
const updateUser=(event)=>{
    event.preventDefault();
    console.log(loginuser);
props.onUpdate(loginuser,id)
     alert("helllo");
    props.history.push('/login')
}
   
       
return <div className="login-Container">


            Welcome to profile
            <ul>
  <li><a  href="/">Home</a></li>
 <Link  to={{

pathname:`/Update/${id}`,



}}> <li className="a">Profile</li></Link>
 
  <Link to="/"><li className="Logout"><a href="/">Logout</a></li></Link>

  <Link to="/users"> <li><a href="/users">Users</a></li> </Link>


</ul>
            <form className="login-Container-form" name="profile">
                <div>
                    <strong>Full Name:</strong>
                    <input type="text" name="fullName" defaultValue={loginuser && loginuser.fullName} 
                    onChange={handleChange} required/>
                </div>
    {/* this.setState((state) => {this.state.loginuser.fullName = e.target.value})}
    
    */}
                <div>
                    <strong>Email:</strong>
                    <input type="email" name="email" defaultValue={loginuser && loginuser.email} 
                    onChange={handleChange} required/>
                </div>
               
                <div>
                    <strong>User Name:</strong>
                    <input type="text" name="userName" defaultValue={loginuser.userName} 
                    onChange={handleChange} required/>
                </div>

                <div>
                    <strong>Password:</strong>
                    <input type="password" name="password" defaultValue={loginuser.password}
                     onChange={handleChange} required/>
                </div>

                
                <div></div>
                
                <div>
                    <button type="submit" onClick={updateUser}>Update</button>
                </div>
               
                <div>
                    <Link to="/Login">
                        <button type="submit" onClick={deleteUser} >Delete User</button>
                    </Link>
                </div>

            </form>




        </div>
    }

export default Update