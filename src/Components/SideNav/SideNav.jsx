import React from "react";
import { Link } from "react-router-dom";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import "./sideNav.css";
import {
  Dashboard,
  NewspaperTwoTone,
  AppRegistrationRounded,
} from '@mui/icons-material'

function SideNav() {
  return (
    <div className="sidenav">
      <div className="dashboard"><Dashboard sx={{color:"white",fontSize:"2em"}}/><h1>Dashboard</h1></div>
      <ul className="navItem">
        <li>
          <Link to="/partner-panel/"><ContactPhoneIcon/>Leeds</Link>
        </li>
        <li>
          <Link to="/partner-panel/registration"><AppRegistrationRounded/>Registration</Link>
        </li>
        <li>
          <Link to="/partner-panel/fee-recipt"><LocalPrintshopIcon/>Fee Recipt</Link>
        </li>
        <li>
          <Link to="/partner-panel/certificate"><NewspaperTwoTone/>Certificate</Link>
        </li>
        <li>
          <Link to="/partner-panel/enquires"><PeopleAltIcon/>Enquires</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
