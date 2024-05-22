import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App"
import PartnerPanel from "../Pages/PartnerPanel/PartnerPanel";
import Leeds from "../Components/Leeds/Leeds";
import Registration from "../Components/Registration/Registration";
import Fee_Recipt from "../Components/Fee-Recipt/Fee_Recipt";
import Certificate from "../Components/Certificate/Certificate";
import Enquiries from "../Components/Enquiries/Enquiries";
import UpdateEnquary from "../Components/UpdateEnquiry/UpdateEnquary"
import Login from "../Pages/Login/Login";
import Admin_Dashboard from "../admin_dashboard/Admin_Dashboard";
import AdminLogin from '../admin_dashboard/AdminLogin'
import New_Center_Form from "../admin_dashboard/admin-componants/newCenterGenForm/New_Center_Form";
import Addmissions from "../admin_dashboard/admin-componants/all-Addmission/Addmissions";
import HomePage from "../Pages/HomePage/HomePage";

let user=JSON.parse(localStorage.getItem("user"))


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/admin",
    element:<AdminLogin/>
  },
  {
    path:"/admin/dashboard",
    element:<Admin_Dashboard/>,
    children:[
      {
        path:"/admin/dashboard/create-center",
        element:<New_Center_Form/>
      },
      {
        path:"/admin/dashboard/addmissions",
        element:<Addmissions/>
      }
    ]
  },
  {
    path:"/partner-panel",
    element: <PartnerPanel/>,
    children:[
      {
        path:"/partner-panel",
        element:<Leeds/>
      },
      {
        path:"registration",
        element:<Registration/>
      },
      {
        path:"fee-recipt",
        element:<Fee_Recipt/>
      },
      {
        path:"certificate",
        element:<Certificate/>
      },
      {
        path:"enquires",
        element:<Enquiries/>
      },
      {
        path:"update-enquiry/:studentId",
        element:<UpdateEnquary/>
      }
    ]
  }
]);
export default router;