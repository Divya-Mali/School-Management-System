import React from 'react';
//import { useNavigate } from "react-router-dom";
import Admin  from '../assets/admin.png';
import Student  from '../assets/student.jpg';
import Teacher  from '../assets/teacher.png';
import '../styles/Navbar.css'

function Home() {
  return (
    <>
  
    
    < div className="categories">

            <div className="category">
                <h4>Admin</h4>
                <img src={Admin} width="300px" height="300px" alt="img"/>
                <button onClick={event => window.location.href='/Pages/Login'}>Login</button>
            </div>

            <div className="category">
                <h4>Student</h4>
                <img src={Student} width="300px" height="300px" alt="img"/>
                <button onClick={event => window.location.href='/Pages/Login'}>Login</button>
            </div>

            <div className="category">
                <h4>Teacher</h4>
                <img src={Teacher} width="300px" height="300px"alt="img"/>
                <button onClick={event => window.location.href='/Pages/Login'}>Login</button>
            </div>



         </div>
         </>
  )
}

export default Home