import React from 'react'
import '../styles/Navbar.css'
import {  BsPeopleFill} from 'react-icons/bs'
import { MdHomeWork } from "react-icons/md";
import { AiTwotoneNotification } from "react-icons/ai";
import Sidebar from '../components/AdminSidebar'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
        <Sidebar/>
        <div className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
                
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                       
                        <BsPeopleFill className='card_icon'/>
                        <h3>Teacher list</h3>
                    </div>
                    <h4><Link style={{color:"white"}} to="/Pages/TeachersList">List of Teacher</Link></h4>
                </div>

                <div className='card'>
                    <div className='card-inner'>
                        <h3>Student List</h3>
                        <BsPeopleFill className='card_icon'/>
                    </div>
                   <h4><Link style={{color:"white"}} to="/Pages/StudentList">List of Students</Link></h4>
                </div>

                <div className='card'>
                    <div className='card-inner'>
                        <h3>Notice List</h3>
                        <AiTwotoneNotification className='card_icon'/>
                    </div>
                  
                    <h4><Link  style={{color:"white"}} to="/Pages/NoticeBoard">List of Notice</Link></h4>
                </div>

                <div className='card'>
                    <div className='card-inner'>
                        <h3>Leave Report</h3>
                        <MdHomeWork className='card_icon'/>
                    </div>
                    
                    <h4><Link style={{color:"white"}}  to="/Pages/LeaveList">List of Students</Link></h4>
                </div>

            </div>
        </div>
    </>
  )
}

export default Dashboard