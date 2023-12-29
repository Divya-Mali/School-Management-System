import React from 'react';
import '../styles/App.css'
import '../styles/Navbar.css'
import { RiComputerLine } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { AiTwotoneNotification } from "react-icons/ai";
import { PiStudentBold } from "react-icons/pi";
import { NavLink } from 'react-router-dom';


const AdminSidebar = () => {
    
    const menuItem=[
      {
        name:"Dashboard",
        icon:<RiComputerLine/>,
        path:"/Pages/AdminDashbord"
      },
      {
        name:"Teacher",
        icon:<GiTeacher/>,
        path:"/Pages/AddTeacher"
      },
      {
        name:"Student",
        icon:<PiStudentBold/>,
        path:"/Pages/AddStudent"
      },
     
      {
        name:"Notice",
        icon:<AiTwotoneNotification/>,
        path:"/Pages/Notice"
      }
    ]
    return (
        <div className="container">
           <div  className="sidebar">

               <div className="top_section">
        
                   <h1 className="logo">Admin</h1>
                   
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" >
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
                 
        </div>
    );
};

export default AdminSidebar;