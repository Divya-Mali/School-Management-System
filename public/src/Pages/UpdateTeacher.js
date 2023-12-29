import React,{ useState,useEffect }  from 'react';
import moment from 'moment/moment';
import { useNavigate,useParams } from 'react-router-dom';

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
  
  const params = useParams();
  const navigate =useNavigate();
  useEffect(()=>{
    getTeacherDetails();
  },[])
  const getTeacherDetails=async()=>{
    
    let result = await fetch(`http://localhost:5000/teacher/${params.id}`);
    result = await result.json();
    setFname(result.fname);
    setEmail(result.email);
    setPassword(result.password);
    setMobile(result.mobile);
    setSalary(result.salary);
    setDate(result.date);
    setCategory(result.category);
  
  }

  const collectData =async () => {

    if(!fname || !email || !password || !category || !mobile || !salary || !date)
    {
        setError(true);
        return false
    }
    console.warn( fname,email, password,mobile,salary,date,category);
    let result = await fetch(`http://localhost:5000/teacher/${params.id}`,{
      method:'put',
      body:JSON.stringify({category,fname,email, password,mobile,salary,date,}),
      headers:{
        'Content-Type':"Application/json"
      }
    });
    result= await result.json()
    console.warn(result)
    localStorage.setItem("teacher",JSON.stringify(result));
    if(result)
    {
      navigate('/Pages/TeachersList')
    }
  }

  return (
    <>
         <AdminSidebar></AdminSidebar>
      <h3 className="title">Update Teacher Details</h3>
     
      <div className='container1'>
        <div className='form' >
        <div>
        <div>
          <label htmlFor='category'> category</label>
                  
                  <input type='text' className='category' id='category' placeholder='category'
                      value={category} onChange={(e) => setCategory(e.target.value)} readOnly
                    />
                   {error && !category && <span className='invalid-input'>Enter valid name</span>}</div>
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
                    <input type='text' className='date' id='date' placeholder='date'
                    value={moment(date).format("DD-MM-YYYY")} onChange={(e) => setDate(e.target.value)}/>
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