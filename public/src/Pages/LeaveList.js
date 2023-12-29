import React,{ useState, useEffect } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import moment from 'moment/moment';
import '../styles/Navbar.css'
import '../styles/App.css'
const Leavelist =()=> {
  const auth= localStorage.getItem("admin")||localStorage.getItem("teacher")||localStorage.getItem("student");

    const [notice, setNotice] = useState("");
    useEffect(()=>{
      getLeave();
   },[])

   const getLeave=async()=>{
     let result = await fetch ('http://localhost:5000/leave-list',{
       headers:{
         
         authorization:JSON.parse(localStorage.getItem('token'))
     }
     });
     result= await result.json();
     setNotice(result);
   }
   const deleteLeave = async(id)=>{
     let result= await fetch(`http://localhost:5000/leave/${id}`,{
     method:"Delete"});
     result = await result.json()
     if(result)
     {
      getLeave();
     }
   };
  
  return(<>
  <AdminSidebar/>  <h3 className='title'>Leave Report</h3>
             <div className='container1'>
             <div className='list'>
        <ul>
          <li>S.No</li>
          <li>Full Name</li>
          <li>From</li>
          <li>To</li>
          <li>Reason</li>
          {
                      ((JSON.parse(auth).category) === '1')?
                      <li>Delete</li>:
                      <li></li>
                    }
        
        </ul>
        {
           notice.length>0 ?notice.map((item,index)=>
          <ul key={item._id}>
          <li> {index+1}</li>
          <li>{item.fname}</li>
          <li>{moment(item.from).format("DD-MM-YYYY")}</li>
          <li> {moment(item.to).format("DD-MM-YYYY")}</li>
          <li>{item.reason}</li>
          {
                      ((JSON.parse(auth).category) === '1')?
                      <li><button onClick={()=>deleteLeave(item._id)}>Delete</button></li>:
                      ""
                    }
        </ul>
          )
         :<h1>No Result Found</h1>
      }
      </div>
      </div>
    </>
  )
}

export default Leavelist