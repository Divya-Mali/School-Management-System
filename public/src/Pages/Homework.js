import React,{useState} from 'react';
import TeacherSidebar from '../components/TeacherSidebar';
import { Select,MenuItem } from '@mui/material';
import '../styles/Navbar.css'
import '../styles/App.css'
const Homework=()=> {
  const [homework, setHomework] = useState("");
  const [submission, setSubmission] = useState("");
  const [standard, setStandard] = useState("");
  const [subject, setSubject] = useState("");
  const updateSelectVal=(e)=>{
    setStandard(e.target.value)
  }

  const collectInfo =async () => {
    
    console.warn( homework,submission,standard,subject);
    let result = await fetch('http://localhost:5000/homework',{
      method:'post',
      body:JSON.stringify({homework,submission,standard,subject}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    result= await result.json()
    console.warn(result)
    localStorage.setItem("homework",JSON.stringify(result));
    if(result)
    {
      alert("Homework store successfully")
    }
  }
  return (
    <>
         <TeacherSidebar/>
      <h3 className="title">Add Homework</h3>
     
      <div className='container1'>
        <div className='form'>
                
                <div>
                  <label htmlFor='Textarea'>Homework</label>
                  <textarea className='homework' id='homework' placeholder='Write here homework'
                  value={homework} onChange={(e)=>setHomework(e.target.value)}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor='subject'>Subject</label>
                  <input type='text' className='subject' id='subject' placeholder='Write here subject'
                  value={subject} onChange={(e)=>setSubject(e.target.value)}
                 />
                </div>
                <div>
                    <label htmlFor='standard'>Homework for Standard</label>
                    <Select style={ {width: "100%",
                                    padding: "12px",
                                    margin:"12px",
                                    border: "1px solid #ccc",
                                    height: "50px"}} 
                                    value={standard} onChange={updateSelectVal} displayEmpty>
                      <MenuItem value="" disabled>Select</MenuItem>
                      <MenuItem value={1}>One</MenuItem>
                      <MenuItem value={2}>Two</MenuItem>
                      <MenuItem value={3}>Three</MenuItem>
                      <MenuItem value={4}>Four</MenuItem>
                      <MenuItem value={5}>Five</MenuItem>
                      <MenuItem value={6}>Six</MenuItem>

                   </Select>
                </div>
                <div>
                <label htmlFor='date'>Homework submit on</label>
                <input type='date' className='submission' id='from' value={submission} onChange={(e)=>setSubmission(e.target.value)}/>   
                </div>
                <div>
                  <input type='submit' onClick={collectInfo} value="submit"/>
                </div>
            
        </div>
       
      </div>
    </>
  )
}

export default Homework