import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'

function AdminLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function loginHandler() {
    if (userName == "vks" || password == "vks@123") {
      localStorage.setItem("admin", JSON.stringify({ userName, password }));
      navigate("/admin/dashboard");
    } else {
      alert("Email And Password Not Match");
    }
  }
  return (
    <div className="login-container">
      <div className="container">
        <h1 className="heading">Admin Login</h1>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
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

export default AdminLogin;
