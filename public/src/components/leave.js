import React,{useState} from 'react';
import TeacherSidebar from '../components/TeacherSidebar';
import StudentSidebar from '../components/StudentSidebar';
import '../styles/Navbar.css'
import '../styles/App.css'
const Notice=()=> {
  const[category,setCategory]=useState("");
  const [fname,setFname] = useState("");
  const [reason, setReason] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const[error,setError]=useState(false)
 const auth= localStorage.getItem("student")||localStorage.getItem("teacher");
  
 if((JSON.parse(auth).category) === '2'){
  var sidebar = <TeacherSidebar/>
 }else{
  sidebar =<StudentSidebar/>}
  const collectInfo =async () => {
    if(!reason || !from || !to){
      setError(true);
        return false
    }
    console.warn( reason,from,to);
    let result = await fetch('http://localhost:5000/leave',{
      method:'post',
      body:JSON.stringify({category,fname,reason,from,to}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    result= await result.json()
    console.warn(result)
    localStorage.setItem("leave",JSON.stringify(result));
    if(result)
    {
      alert("leave store successfully")
    }
  }
  return (
    <>
         {sidebar}
      <h3 className="title">Leave Aplication</h3>
     
      <div className='container1'>
        <div className='form'>
          <div><input type='text' className='category' id='category' placeholder='category'
                      value={JSON.parse(auth).category} onChange={(e) => setCategory(e.target.value)} readOnly
                    /></div>
                <div>
                  <label htmlFor='fname'>Name</label>
                  <input type='text' className='fname' id='fname' placeholder='Write here full name'
                  value={fname} onChange={(e)=>setFname(e.target.value)}/>
            </div>
                <div>
                  <label htmlFor='Textarea'>Reason for Leave</label>
                  <textarea className='reason' id='reason' placeholder='Write here reason'
                  value={reason} onChange={(e)=>setReason(e.target.value)}
                  ></textarea>{error&& !reason && <span className='invalid-input'>Enter valid reason</span>}
                </div>
                <div>
                <label htmlFor='date'>From date</label>
                <input type='date' className='from' id='from' value={from} onChange={(e)=>setFrom(e.target.value)}/>
                {error&& !from && <span className='invalid-input'>Enter valid date</span>}
                <label htmlFor='date'>To date</label>
                <input type='date' className='to' id='to' value={to} onChange={(e)=>setTo(e.target.value)}/>
                {error&& !to && <span className='invalid-input'>Enter valid date</span>}    
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