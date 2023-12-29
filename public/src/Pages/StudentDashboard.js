import React from 'react'
import '../styles/Navbar.css'
import { BsCurrencyRupee, BsPersonCircle, BsListCheck} from 'react-icons/bs';
import { TiDocumentText } from 'react-icons/ti'
import Sidebar from '../components/StudentSidebar'

function Dashboard() {
    const auth= localStorage.getItem("student");
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
                        <BsPersonCircle className='card_icon'/>
                    </div>
                    <h1>{JSON.parse(auth).fname}</h1>
            
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Your email</h3>
                        <BsListCheck className='card_icon'/>
                    </div>
                    <h1>{JSON.parse(auth).email}</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Mobile</h3>
                        <TiDocumentText className='card_icon'/>
                    </div>
                    <h1>{JSON.parse(auth).mobile}</h1>
                    
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Fees</h3>
                        <BsCurrencyRupee className='card_icon'/>
                    </div>
                    <h1>{JSON.parse(auth).fees}</h1>
                    
                </div>
            </div>

        
        </div>
    </>
  )
}

export default Dashboard