import React,{ useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Select,MenuItem } from '@mui/material';
import AdminSidebar from '../components/AdminSidebar'
import '../styles/Navbar.css'
import '../styles/App.css'
const UpdateS =()=> {
 
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [fees, setFees] = useState("");
    const [standard, setStandard] = useState("");
    const [category, setCategory] = useState("");
    const updateSelectVal=(e)=>{
      setStandard(e.target.value)
    }
   
    const params = useParams();
    const navigate= useNavigate();
    

    const getStudentDetails=async()=>{

      let result = await fetch(`http://localhost:5000/student/${params.id}`);
      result = await result.json();
      setFname(result.fname);
      setEmail(result.email);
      setPassword(result.password);
      setMobile(result.mobile);
      setFees(result.fees);
      setStandard(result.standard);
      setCategory(result.category);
    }
   useEffect(()=>{
      getStudentDetails();
    },[])
  const updateStudent =async () => {
      console.warn(params)
      let result= await fetch(`http://localhost:5000/student/${params.id}`,{
        method: 'Put',
        body: JSON.stringify({category,fname,email,password,mobile,fees,standard}),
        headers:{
          'Content-Type':"Application/json"
        }
      });
      result = await result.json();
      console.warn(result)
      if(result){navigate("/Pages/StudentList")}
      
   
  }
  return (
    <>
         <AdminSidebar></AdminSidebar>
      <h3 className="title">Add New Student Details</h3>
     
      <div className='container1'>
        <div className='form'>
                <div><label htmlFor='category'> category</label>
                  
                <input type='text' className='category' id='category' placeholder='category'
                    value={category} onChange={(e) => setCategory(e.target.value)} readOnly
                  />
                </div>
                 <div>
                  <label htmlFor='fname'>First Name</label>
                  <input type='text' className='fname' id='fname' placeholder='First Name'
                    value={fname} onChange={(e) => setFname(e.target.value)}
                  />
                
                </div>
              
                <div>
                  <label htmlFor='email'>Email</label>
                  <input type='text' className='email' id='email' placeholder='Email'
                     value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                  
                </div>
                <div>
                  <label htmlFor='password'>Password</label>
                  <input  type='password' className='password' id='password' placeholder='Password'
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                   
                </div>
                <div>
                  <label htmlFor='mobile'>Mobile</label>
                  <input type='number' className='mobile' id='mobile' placeholder='Mobile'
                  value={mobile} onChange={(e) => setMobile(e.target.value)}
                  />
                  
                </div>
                <div>
                    <label htmlFor='fees'>Fees</label>
                    <input type='number' className='fees' id='fees' placeholder='Fees'
                      value={fees} onChange={(e) => setFees(e.target.value)}
                    />
                    
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

                   </Select>
                </div>
                <div>
                  <input type='submit'  onClick={updateStudent} value="submit"/>
                </div>
            
        </div>
       
      </div>
    </>
  )
}

export default UpdateS