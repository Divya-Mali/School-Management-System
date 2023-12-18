import React,{ useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { Select,MenuItem } from '@mui/material';
import AdminSidebar from '../components/AdminSidebar'
import '../styles/Navbar.css'
import '../styles/App.css'
const AddT= () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const updateSelectVal=(e)=>{
    setCategory(e.target.value)
  }
  const navigate =useNavigate();

  const collectData =async () => {

    if(!fname || !email || !password || !category || !mobile || !salary || !date)
    {
        setError(true);
        return false
    }
    console.warn( fname,email, password,mobile,salary,date,category);
    let result = await fetch('http://localhost:5000/teacher',{
      method:'post',
      body:JSON.stringify({fname,email, password,mobile,salary,date,category}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    result= await result.json()
    console.warn(result)
    localStorage.setItem("teacher",JSON.stringify(result));
    if(result)
    {
      navigate('/Pages/AdminDashbord')
    }
  }

  return (
    <>
         <AdminSidebar></AdminSidebar>
      <h3 className="title">Add New Teacher Details</h3>
     
      <div className='container1'>
        <div className='form' >
        <div>
        <label htmlFor='Select'>Select category</label>
                   <Select style={ {width: "100%",
                                    padding: "12px",
                                    margin:"12px",
                                    border: "1px solid #ccc",
                                    height: "50px"}} 
          value={category}onChange={updateSelectVal} displayEmpty>
            
                      <MenuItem value="" disabled>Select</MenuItem>
                      <MenuItem value={2}>Teacher</MenuItem>
                   </Select>
                   {error && !category && <span className='invalid-input'>Enter valid name</span>}
                </div>
                 <div>
                  <label htmlFor='fname'>Name</label>
                  <input type='text' className='fname' id='fname' placeholder='First Name'
                  value={fname} onChange={(e) => setFname(e.target.value)}/>
                  {error && !fname && <span className='invalid-input'>Enter valid name</span>}
                </div>
            
                <div>
                  <label htmlFor='email'>Email</label>
                  <input type='text' className='email' id='email' placeholder='Email' autoComplete="off"
                  value={email} onChange={(e) => setEmail(e.target.value)}/>
                  {error && !email && <span className='invalid-input'>Enter valid email</span>}
                </div>
                <div>
                  <label htmlFor='password'>Password</label>
                  <input  type='password' className='password' id='password' placeholder='Password'
                  value={password} onChange={(e) => setPassword(e.target.value)}/>
                  {error && !password && <span className='invalid-input'>Enter valid password</span>}
                </div>
                <div>
                  <label htmlFor='mobile'>Mobile</label>
                  <input type='number' className='mobile' id='mobile' max={10} min={10} placeholder='Mobile '
                  value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                  {error && !password && <span className='invalid-input'>Enter valid password</span>}
                </div>
                <div>
                    <label htmlFor='date'>Joining Date</label>
                    <input type='date' className='date' id='date' placeholder='salary'
                    value={date} onChange={(e) => setDate(e.target.value)}/>
                    {error && !date && <span className='invalid-input'>Enter valid date</span>}
                </div>
                <div>
                    <label htmlFor='salary'>Salary</label>
                    <input type='number' className='salary' id='salary' placeholder='salary'
                    value={salary} onChange={(e) => setSalary(e.target.value)}/>
                    {error && !salary && <span className='invalid-input'>Enter valid salary</span>}
                </div>
                <div>
                  <input type='submit' onClick={collectData}  value="submit"/>
                </div>
            
        </div>
       
      </div>
    </>
  )
}

export default AddT