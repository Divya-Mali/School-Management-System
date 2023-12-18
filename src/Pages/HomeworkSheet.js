import React,{ useState, useEffect } from 'react';
import StudentSidebar from '../components/StudentSidebar';
import TeacherSidebar from '../components/TeacherSidebar';
import '../styles/Navbar.css'
import '../styles/App.css'
const HomeworkSheet =()=> {
  const auth= localStorage.getItem("admin")||localStorage.getItem("teacher")||localStorage.getItem("student");

  
        if((JSON.parse(auth).category) === '2'){
           var sidebar =<TeacherSidebar/>
        }else{
            sidebar =<StudentSidebar/>
        }
   

    const [notice, setNotice] = useState("");
    useEffect(()=>{
      getHomework();
   },[])

   const getHomework=async()=>{
     let result = await fetch ('http://localhost:5000/homework-list',{
       headers:{
         
         authorization:JSON.parse(localStorage.getItem('token'))
     }
     });
     result= await result.json();
     setNotice(result);
   }
   const deleteHomework = async(id)=>{
     let result= await fetch(`http://localhost:5000/homework/${id}`,{
     method:"Delete"});
     result = await result.json()
     if(result)
     {
      getHomework();
     }
   };
  
    
   
  
  return(<>
    {sidebar}  <h3 className='title'>Homework List</h3>
             <div className='container1'>
             <div className='list'>
        <ul>
          <li>S.No</li>
          <li>Homework</li>
          <li>Standard</li>
          <li>Subject</li>
          {
                      ((JSON.parse(auth).category) === '2')?
                      <li>Delete</li>:
                      <button style={{display:'none'}} ></button>
                    }
        
        </ul>
        {
           notice.length>0 ?notice.map((item,index)=>
          <ul key={item._id}>
          <li> {index+1}</li>
          <li>{item.homework}</li>
          <li>{item.standard}</li>
          <li>{item.subject}</li>
          {
                      ((JSON.parse(auth).category) === '2')?
                      <li><button onClick={()=>deleteHomework(item._id)}>Delete</button></li>:
                      <button style={{display:'none'}} ></button>
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

export default HomeworkSheet