import React from 'react'
import '../styles/Navbar.css'
import moment from 'moment/moment';
import { BsFillPersonFill, BsCalendarDate, BsCurrencyRupee} from 'react-icons/bs';
import {FaMobileAlt} from 'react-icons/fa'
import Sidebar from '../components/TeacherSidebar'

function Dashboard() {
    const auth= localStorage.getItem("teacher");
    
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
                        <h3>Name</h3>
                        <BsFillPersonFill className='card_icon'/>
                    </div>
                    <h1> {JSON.parse(auth).fname}</h1>
                </div>

                <div className='card'>
                    <div className='card-inner'>
                        <h3>Mobile Number</h3>
                        <FaMobileAlt className='card_icon'/>
                    </div>
                    <h1>{JSON.parse(auth).mobile}</h1>
                </div>

                <div className='card'>
                    <div className='card-inner'>
                        <h3>Joining Date</h3>
                        <BsCalendarDate className='card_icon'/>
                    </div>
                    <h1>{moment(JSON.parse(auth).date).format("DD-MM-YYYY")}</h1>
                    
                </div>

                <div className='card'>
                    <div className='card-inner'>
                        <h3>Salary</h3>
                        <BsCurrencyRupee className='card_icon'/>
                    </div>
                    <h1>{JSON.parse(auth).salary}</h1>
                </div>
            </div>

        </div>
    </>
  )
}

export default Dashboard