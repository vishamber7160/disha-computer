import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import './admin.css'
import MenuAppBar from "./Navbar.jsx";
import AdminSideNavigation from "./AdminSideNavigation.jsx";

function Admin_Dashboard() {
  const navigate=useNavigate()
  useEffect(()=>{
    let logedinUser=JSON.parse(localStorage.getItem("admin"))
    console.log(logedinUser)
    if(!logedinUser){
      navigate("/admin")
    }
  },[])
  return (
    <div className="mainContainer">
      <MenuAppBar/>
    <div className="panelContainer">
      <AdminSideNavigation/>
      <Outlet />
    </div>
    </div>
  );
}

export default Admin_Dashboard;
