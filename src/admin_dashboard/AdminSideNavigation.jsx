import React from "react";
import { Link } from "react-router-dom";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import "./adminSideNav.css";
import {
  Dashboard,
  NewspaperTwoTone,
  AppRegistrationRounded,
} from '@mui/icons-material'

function AdminSideNavigation() {
  return (
    <div className="sidenav">
      <div className="dashboard"><Dashboard sx={{color:"white",fontSize:"2em"}}/><h2>Admin Dashboard</h2></div>
      <ul className="navItem">
        <li>
          <Link to="/admin/dashboard/create-center"><ContactPhoneIcon/>New Center</Link>
        </li>
        <li>
          <Link to="/admin/dashboard/addmissions"><PeopleAltIcon/>All Addmissions</Link>
        </li>
        <li>
          <Link to="/admin/dashboard/"><AppRegistrationRounded/>Registration</Link>
        </li>
        <li>
          <Link to="/admin/dashboard/create-center"><LocalPrintshopIcon/>Fee Recipt</Link>
        </li>
        <li>
          <Link to="/admin/dashboard/create-center"><NewspaperTwoTone/>Certificate</Link>
        </li>
      </ul>
    </div>
  )
}

export default AdminSideNavigation