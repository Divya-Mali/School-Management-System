import React,{ useState, useEffect } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import TeacherSidebar from '../components/TeacherSidebar';
import StudentSidebar from '../components/StudentSidebar';
import '../styles/Navbar.css'
import '../styles/App.css'
const NoticeBoard =()=> {
    const auth= localStorage.getItem("admin")||localStorage.getItem("teacher")||localStorage.getItem("student");

    if((JSON.parse(auth).category) === '1'){
            var sidebar = <AdminSidebar/>
              }else{
                if((JSON.parse(auth).category) === '2'){
                    sidebar =<TeacherSidebar/>
                }else{
                    sidebar =<StudentSidebar/>
                }
           }
    const [notice, setNotice] = useState("");
    useEffect(()=>{
        getNotice();
   },[])

   const getNotice=async()=>{
     let result = await fetch ('http://localhost:5000/notice-list',{
       headers:{
         
         authorization:JSON.parse(localStorage.getItem('token'))
     }
     });
     result= await result.json();
     setNotice(result);
   }
   
   
   const deleteNotice = async(id)=>{
    let result= await fetch(`http://localhost:5000/notice/${id}`,{
    method:"Delete"});
    result = await result.json()
    if(result)
    {
       getNotice();
    }
  }
  

    
   
  
  return(<>
    {sidebar}
                <h3 className='title'>Notice</h3>
                <div className='container1'><div className='list' >

                <ul>
          <li><h3>S.No</h3></li>
          <li><h3>Notice</h3></li>
          {
                      ((JSON.parse(auth).category) === '3')?
                      "":<li><h3>Noticefor</h3></li>
                      
                    }
          {
                      ((JSON.parse(auth).category) === '1')?
                      <li><h3>Delete</h3></li>:
                    ""
                    }
        
        </ul>
        {
               notice.length>0 ?notice.map((item,index)=> <ul  key={item._id}>
                 
                 <li > {index+1}</li>
                
                 <li >
                    {
                        ((JSON.parse(auth).category) === '1') ? 
                        item.notice : ((JSON.parse(auth).category) === '2') ? 
                        item.notice :  ((JSON.parse(auth).category) === item.category) ? 
                        item.notice : "No Notice"
                     }
                  </li>
                {
                    ((JSON.parse(auth).category) === '3') ? ""
                          : 
                          <li>
                          { 
                          (item.category === '2')? 
                          "Teacher" :"Student"  
                          }
                          </li>
                          }
                  
                 
                    {
                      ((JSON.parse(auth).category) === '1')?
                      <li ><button onClick={()=>deleteNotice(item._id)}>Delete</button></li>:
                      <button style={{display:'none'}} ></button>
                    }
                  
              
          
         </ul>)






           
          // <div key={item._id}>
          //        <div>{index+1}.    {item.notice}  </div>
                  //<div style={{marginLeft:"5px"}}> 
          //       </div> 
          //   </div>      
         
          
         :<h1>No Result Found</h1>
      }
      </div></div>
    </>
  )
}

export default NoticeBoard