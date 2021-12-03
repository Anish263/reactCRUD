import React,{Component} from 'react';
import RegistrationLink from './RegisterationLink';
import "../styles/form.css"

import '../styles/form.css'
function Login (props){
     

   
const loginSubmit=(event)=>{

    event.preventDefault();
    const userName = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        console.log(userName, password);
        if (userName && password) {
            let users = props.users;
            users = users.filter(user => (user.userName === userName && user.password === password));
            console.log(users);
            if (users.length > 0) {
                console.log("Valid login");
                props.history.push('/LoginSuccess/' + users[0].id);
            }
            else
                alert("Please, check credentials");
        }
}
   
        return (
        <div  className="main-container">
            Hello
            <form className="login-form" onSubmit={loginSubmit}>
                <h1>Login Here...</h1>
                <input type="text" placeholder="Username" name="username" required/>
                <input type="password" placeholder="Password" name="password" required/>
                <button type="submit">Login</button>
                <RegistrationLink />
            </form>
        </div>
         ) }


export default Login