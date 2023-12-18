import React from 'react';
import logo from '../assets/logo.png';
import { Link,useNavigate } from "react-router-dom";
import '../styles/Navbar.css';
function Navbar() {
  const auth= localStorage.getItem("admin")||localStorage.getItem("teacher")||localStorage.getItem("student");
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate("/")
  }
  return (

    <div className='navbar'>
        <div className='leftside'>
            <img src={logo} alt='logo' height="100px" width="75px"/>
            <div className="title">School Management System</div>
        </div>
        <div className='rightside'>
        {
                auth ?
          <ul>
            <li><Link onClick={logout} to="/"> Logout </Link></li>
            </ul>:
            <ul>
            <li><Link  to="/"> Home </Link></li>
                                 
          </ul>
        }
        </div>
    </div>
  )
}

export default Navbar
