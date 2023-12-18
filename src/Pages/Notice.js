import React,{useState} from 'react'
import AdminSidebar from '../components/AdminSidebar';
import TeacherSidebar from '../components/TeacherSidebar';
import { Select,MenuItem } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import '../styles/Navbar.css'
import '../styles/App.css'
const Notice=()=> {
  const auth= localStorage.getItem("admin")||localStorage.getItem("teacher");
  
 if((JSON.parse(auth).category) === '1'){
  var sidebar = <AdminSidebar/>
 }else{
  sidebar =<TeacherSidebar/>}

  const [notice, setNotice] = useState("");
  const [category, setCategory] = useState("");
  const updateSelectVal=(e)=>{
    setCategory(e.target.value)
  }
  const [error, setError] = useState(false);
  const navigate =useNavigate();
  
  const collectInfo =async () => {
    
    if(!notice || !category )
  {
      setError(true);
      return false
  }
    console.warn( notice,category);
    let result = await fetch('http://localhost:5000/notice',{
      method:'post',
      body:JSON.stringify({notice,category}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    result= await result.json()
    console.warn(result)
    localStorage.setItem("notice",JSON.stringify(result));
    if(result)
    {
      navigate('/Pages/AdminDashbord')
    }
  }
   
  return (
    
    <>
        {sidebar}
      <h3 className="title">Announce Somthing</h3>
     
      <div className='container1'>
        <div className='form'>
                
                <div>
                  <label htmlFor='Textarea'>Notice</label>
                  <textarea className='notice' id='notice' placeholder='Write here notice'
                  value={notice} onChange={(e)=>setNotice(e.target.value)}
                  ></textarea>
                  {error && !notice && <span className='invalid-input'>Enter valid notice</span>}
                </div>
                <div>
                    <label htmlFor='Select'>Notice for</label>
                   <Select style={ {width: "100%",
                                    padding: "12px",
                                    margin:"12px",
                                    border: "1px solid #ccc",
                                    height: "50px"}} 
          value={category}onChange={updateSelectVal} displayEmpty>
                      <MenuItem value="" disabled>Select</MenuItem>
                      <MenuItem value={2}>Teacher</MenuItem>
                      <MenuItem value={3}>Student</MenuItem>
                   </Select>
                   {error && !category && <span className='invalid-input'>Enter valid category</span>}
                  
                </div>
                <div>
                  <input type='submit' onClick={collectInfo} value="submit"/>
                </div>
            
        </div>
       
      </div>
    </>
  )
}

export default Notice