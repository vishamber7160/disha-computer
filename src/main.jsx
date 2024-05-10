import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PartnerPanel from "./Pages/PartnerPanel/PartnerPanel.jsx";
import Leeds from "./Components/Leeds/Leeds.jsx";
import Registration from "./Components/Registration/Registration.jsx";
import Fee_Recipt from "./Components/Fee-Recipt/Fee_Recipt.jsx";
import Certificate from "./Components/Certificate/Certificate.jsx";
import Enquiries from "./Components/Enquiries/Enquiries.jsx";
import UpdateEnquary from "./Components/UpdateEnquiry/UpdateEnquary.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/partner-panel/",
    element:<PartnerPanel/>,
    children:[
      {
        path:"/partner-panel/",
        element:<Leeds/>
      },
      {
        path:"/partner-panel/registration",
        element:<Registration/>
      },
      {
        path:"/partner-panel/fee-recipt",
        element:<Fee_Recipt/>
      },
      {
        path:"/partner-panel/certificate",
        element:<Certificate/>
      },
      {
        path:"/partner-panel/enquires",
        element:<Enquiries/>
      },
      {
        path:"/partner-panel/update-enquiry/:studentId",
        element:<UpdateEnquary/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
