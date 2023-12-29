import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select,MenuItem } from '@mui/material';
import AdminSidebar from '../components/AdminSidebar'
import '../styles/Navbar.css'
import '../styles/App.css'
const AddS =()=> {
 
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [fees, setFees] = useState("");
    const [standard, setStandard] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState(false);
    const updateSelectVal=(e)=>{
      setStandard(e.target.value)
    }
    const updateCatVal=(e)=>{
      setCategory(e.target.value)
    }
  
    const navigate =useNavigate();

  const collectData =async () => {

    if(!fname || !email || !password || !category || !mobile || !fees || !standard)
    {
        setError(true);
        return false
    }
    
    console.warn( category,fname,email, password,mobile,fees,standard);
    let result = await fetch('http://localhost:5000/student',{
      method:'post',
      body:JSON.stringify({category,fname,email,password,mobile,fees,standard}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    result= await result.json()
    console.warn(result)
    localStorage.setItem("student",JSON.stringify(result));
    if(result)
    {
      navigate('/Pages/AdminDashbord')
    }
  }
  return (
    <>
         <AdminSidebar></AdminSidebar>
      <h3 className="title">Add New Student Details</h3>
     
      <div className='container1'>
        <div className='form'>
                <div><label htmlFor='Select'>Select category</label>
                   <Select style={ {width: "100%",
                                    padding: "12px",
                                    margin:"12px",
                                    border: "1px solid #ccc",
                                    height: "50px"}} 
          value={category}onChange={updateCatVal} displayEmpty>
            
                      <MenuItem value="" disabled>Select</MenuItem>
                      <MenuItem value={3}>Student</MenuItem>
                      
                   </Select>{error && !category && <span className='invalid-input'>Enter valid name</span>}
                </div>
                 <div>
                  <label htmlFor='fname'>First Name</label>
                  <input type='text' className='fname' id='fname' placeholder='First Name'
                    value={fname} onChange={(e) => setFname(e.target.value)}
                  />
                  {error && !fname && <span className='invalid-input'>Enter valid name</span>}
                </div>
              
                <div>
                  <label htmlFor='email'>Email</label>
                  <input type='text' className='email' id='email' placeholder='Email'
                     value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && !email && <span className='invalid-input'>Enter valid email</span>}
                </div>
                <div>
                  <label htmlFor='password'>Password</label>
                  <input  type='password' className='password' id='password' placeholder='Password'
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && !password && <span className='invalid-input'>Enter valid password</span>}
                </div>
                <div>
                  <label htmlFor='mobile'>Mobile</label>
                  <input type='number' className='mobile' id='mobile' placeholder='Mobile'
                  value={mobile} onChange={(e) => setMobile(e.target.value)}
                  />
                  {error && !mobile && <span className='invalid-input'>Enter valid mobile</span>}
                </div>
                <div>
                    <label htmlFor='fees'>Fees</label>
                    <input type='number' className='fees' id='fees' placeholder='Fees'
                      value={fees} onChange={(e) => setFees(e.target.value)}
                    />
                    {error && !fees && <span className='invalid-input'>Enter valid fees</span>}
                </div>
                <div>
                    <label htmlFor='standard'>Standard</label>
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

                   </Select>{error && !standard && <span className='invalid-input'>Enter valid standard</span>}
                </div>
                <div>
                  <input type='submit'  onClick={collectData} value="submit"/>
                </div>
            
        </div>
       
      </div>
    </>
  )
}

export default AddS