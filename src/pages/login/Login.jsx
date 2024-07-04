import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="LoginLeft">
                    <h3 className="LoginLogo">Abhay Singh</h3>
                    <span className="loginDescription">
                        Hello Guys How Are You
                    </span>
                </div>
                <div className="LoginRight">
                    <div className="loginBox">
                        <input type="email" placeholder="email" className="loginInput"/>
                        <input type="password" placeholder="password" className="loginInput" />
                        <button className="loginbutton">Login</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="LoginRegisterButton">Create New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;