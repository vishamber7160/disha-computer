import React, { useEffect, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import './login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let logedinUser = JSON.parse(localStorage.getItem("user"));
    if (logedinUser) {
      navigate("/partner-panel/");
    }
  }, []);
  function loginHandler() {
    if (email != "" || password != "") {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      navigate("/partner-panel/");
    } else {
      alert("Email And Password can't Leave Blank");
    }
  }
  return (
    <div className="login-container">
      <div className="container">
        <h1 className="heading">Partner Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="inpField"
          placeholder="example@exampe.comple"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="inpField"
          placeholder="Password"
        />
        <button onClick={loginHandler} className="loginBtn">Login</button>
      </div>
    </div>
  );
}

export default Login;
