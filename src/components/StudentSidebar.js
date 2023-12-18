import React, { useState } from 'react';
import '../styles/App.css'
import '../styles/Navbar.css'
import { FaBars }from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { MdHomeWork } from "react-icons/md";
import { FcLeave } from "react-icons/fc";
import { AiTwotoneNotification } from "react-icons/ai";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
      {
        name:"Dashboard",
        icon:<RiComputerLine/>,
        path:"/Pages/StudentDashboard"
      },
      
      {
        name:"Homework",
        icon:<MdHomeWork/>,
        path:"/Pages/HomeworkSheet"
      },
      {
        name:"Leave Report",
        icon:<FcLeave/>,
        path:"/components/leave"
      },
      
      {
        name:"Notice",
        icon:<AiTwotoneNotification/>,
        path:"/Pages/NoticeBoard"
      }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Student</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;