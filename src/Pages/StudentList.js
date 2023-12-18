import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/AdminSidebar'
import '../styles/Navbar.css'
import '../styles/App.css'
const StudentList =()=> {
 
    const [students, setStudents] = useState([]);
     useEffect(()=>{
      getStudents();
    },[])

    const getStudents=async()=>{
      let result = await fetch ('http://localhost:5000/students-list',{
        headers:{
          
          authorization:`beare ${JSON.parse(localStorage.getItem('token'))}`
      }
      });
      result= await result.json();
      setStudents(result);
    }
    const deleteStudent = async(id)=>{
      let result= await fetch(`http://localhost:5000/student/${id}`,{
      method:"Delete"});
      result = await result.json()
      if(result)
      {
        getStudents();
      }
    };
   
  
  return(<>
    <Sidebar/>
                <h3 className='title'>Student List</h3>
             <div className='container1'>
      <div className='list'>
        <ul>
          <li>S.No</li>
          <li>Student Name</li>
          <li>Standard</li>
          <li>Fees</li>
          <li>Delete</li>
          <li>Update</li>
        </ul>
        {
           students.length>0 ?students.map((item,index)=>
          <ul key={item._id}>
          <li> {index+1}</li>
          <li>{item.fname}</li>
          <li>{item.standard}</li>
          <li>{item.fees}</li>
          <li><button onClick={()=>deleteStudent(item._id)}>Delete</button></li>
              <li><Link to={"/Pages/UpdateStudent/"+item._id}>Update</Link>
          </li>
         
        </ul>
          )
         :<h1>No Result Found</h1>
      }
      </div>
      </div>
    </>
  )
}

export default StudentList