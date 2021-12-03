import React,{Component} from 'react';
// import { Link } from 'react-router-dom';
import LoginLink from "./LoginLink"
import "../styles/form.css"
function Registeration(props) {
    
  const register=(event)=>{
        event.preventDefault();

        const fullName = event.target.elements.fullName.value;
        const email = event.target.elements.email.value;
        const userName = event.target.elements.userName.value;
        const password = event.target.elements.password.value;
        const user = {
            id: Number(new Date()),
            fullName: fullName,
            email: email,
            userName: userName,
            password: password
        }
        if (fullName && email && userName && password) {
            props.onAddUser(user);
        }
    }

    
        return <div className="main-container">
            <form className="form" onSubmit={register}> 
                <h1>Welcome </h1>
                <input type="text" placeholder="Fullname" name="fullName" required/>
                <input type="email" placeholder="Email" name="email" required/>
                <input type="text" placeholder="Username" name="userName" required/>
                <input type="password" placeholder="Password" name="password" required/>
             <button type="submit">Register</button>
              <LoginLink/>
            </form>
        </div>;
    }

export default Registeration