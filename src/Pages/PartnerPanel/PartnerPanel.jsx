import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideNav from "../../Components/SideNav/SideNav";
import './partnerPanel.css'
import MenuAppBar from "../../Components/Navbar/Navbar.jsx";

function PartnerPanel() {
  const navigate=useNavigate()
  useEffect(()=>{
    let logedinUser=JSON.parse(localStorage.getItem("user"))
    console.log(logedinUser)
    if(!logedinUser){
      navigate("/login")
    }
  },[])
  return (
    <div className="mainContainer">
      <MenuAppBar/>
    <div className="panelContainer">
      <SideNav />
      <Outlet />
    </div>
    </div>
  );
}

export default PartnerPanel;
