import React,{  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select,MenuItem } from '@mui/material';
import '../styles/Navbar.css';
import '../styles/App.css';

const Login = () => {

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [category, setCategory] = useState("");
      const updateSelectVal=(e)=>{
        setCategory(e.target.value)
      }
      const navigate = useNavigate();
      const collectData = async () => {
      console.warn( email, password,category);
      let result = await fetch('http://localhost:5000/login',{
          method: 'post',
          body: JSON.stringify({ email, password,category }),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      result = await result.json();
       
        try
        {
          if ((result.user).category==="1")
           {
            localStorage.setItem('admin', JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.auth));
           
            navigate("/Pages/AdminDashbord")
            } 
            else 
            {
              if((result.user).category==="2")
               {
                localStorage.setItem('teacher', JSON.stringify(result.user));
                localStorage.setItem('token', JSON.stringify(result.auth));
                navigate("/Pages/TeacherDashboard")
                }
                else{
                  if((result.user).category==="3")
                    {
                     localStorage.setItem('student', JSON.stringify(result.user));
                        localStorage.setItem('token', JSON.stringify(result.auth));
                        navigate("/Pages/StudentDashboard")
                      }
                      else{
                        alert("please enter correct detail")
                      }

                }
            }

        }
        catch(error){
            console.warn("somthing wrong")
        }
  }


  return (
    <>
      <h3 className="title">Login </h3>

      <div className='container1'>
        <div className='form'>
                
                <div>
                  <label htmlFor='email'>Email</label>
                  <input type='text' className='email' id='email' placeholder='Email'
                   value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                  <label htmlFor='password'>Password</label>
                  <input  type='password' className='password' id='password' placeholder='Password'
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='Select'>Login As a</label>
                   <Select style={ {width: "100%",
                                    padding: "12px",
                                    margin:"12px",
                                    border: "1px solid #ccc",
                                    height: "50px"}} 
          value={category}onChange={updateSelectVal} displayEmpty>
                      <MenuItem value="" disabled>Select</MenuItem>
                      <MenuItem value={1}>Admin</MenuItem>
                      <MenuItem value={2}>Teacher</MenuItem>
                      <MenuItem value={3}>Student</MenuItem>
                   </Select>
                  
                </div>
                <div>
                  <input type='submit'  onClick={collectData} value="submit"/>
                </div>
            
        </div>
       
      </div>
    </>
  )
}

export default Login


