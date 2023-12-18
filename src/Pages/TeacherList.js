import React,{ useState, useEffect } from 'react';
import moment from 'moment/moment';
import Sidebar from '../components/AdminSidebar';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import '../styles/App.css'
const TeachersList =()=> {
 
    const [teachers, setTeachers] = useState([]);
     useEffect(()=>{
      getTeachers();
    },[])

    const getTeachers=async()=>{
      let result = await fetch ('http://localhost:5000/teachers-list')
      result= await result.json();
      setTeachers(result);
    }

    const deleteTeacher = async(id)=>{
      let result= await fetch(`http://localhost:5000/teacher/${id}`,{
      method:"Delete"});
      result = await result.json()
      if(result)
      {
        getTeachers();
      }
    };
  
    
  return(<>
    <Sidebar/>
  
                <h3 className='title'>Teachers List</h3>
             <div className='container1'>
      <div className='list'>
        <ul>
          <li>S.No</li>
          <li>Teacher Name</li>
          <li>Joining On</li>
          <li>Salary</li>
          <li>Delete</li>
          <li>Update</li>
        </ul>
        {
          teachers.map((item,index)=>
        
          <ul key={item._id} >
          <li> {index+1}</li>
          <li>{item.fname}</li>
          <li>{moment(item.date).format("DD-MM-YYYY")}</li>
          <li>{item.salary}</li>
          <li><button onClick={()=>deleteTeacher(item._id)}>Delete</button></li>
              <li><Link to={"/Pages/UpdateTeacher/"+item._id}>Update</Link>
          </li>
        </ul>
          )
        }
      </div>
      </div>
    </>
  )
}

export default TeachersList