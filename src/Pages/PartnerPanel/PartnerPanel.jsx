import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SideNav from "../../Components/SideNav/SideNav";
import './partnerPanel.css'
import MenuAppBar from "../../Components/Navbar/Navbar.jsx";

function PartnerPanel() {
  const navigate=useNavigate()
  function logout() {
    localStorage.removeItem("user")
    navigate("/")
  }
  return (
    <div className="mainContainer">
      {/* <div className="navbar">
        <Link id="logout" onClick={()=>logout()}>Logout</Link>
      </div> */}
      <MenuAppBar/>
    <div className="panelContainer">
      <SideNav />
      <Outlet />
    </div>
    </div>
  );
}

export default PartnerPanel;
