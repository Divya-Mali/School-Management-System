import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import AdminDashboard from "./Pages/AdminDashbord";
import TeacherDashboard from "./Pages/TeacherDashboard"
import StudentDashboard from "./Pages/StudentDashboard"
import Notice from "./Pages/Notice";
import NoticeBoard from "./Pages/NoticeBoard";
import AddTeacher from "./Pages/AddTeacher";
import AddStudent from "./Pages/AddStudent";
import Leave from "./components/leave";
import Homework from "./Pages/Homework";
import HomeworkSheet from "./Pages/HomeworkSheet";
import TeachersList from "./Pages/TeacherList";
import './styles/App.css';
import PrivateComponent from "./components/PrivateComponent";
import StudentList from "./Pages/StudentList";
import UpdateS from "./Pages/UpdateStudent";
import UpdateTeacher from "./Pages/UpdateTeacher"
import LeaveList from "./Pages/LeaveList";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
          <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/Pages/About' exact element={<About/>}></Route>
          <Route path='/Pages/Login' exact element={<Login/>}></Route>

          <Route element={<PrivateComponent/>}>
          <Route path='/Pages/AdminDashbord' exact element={<AdminDashboard/>}></Route>
          <Route path='/Pages/TeacherDashboard' exact element={<TeacherDashboard/>}></Route>
          <Route path='/Pages/StudentList' exact element={<StudentList/>}></Route>
          <Route path='/Pages/UpdateTeacher/:id' exact element={<UpdateTeacher/>}></Route>
          <Route path='/Pages/UpdateStudent/:id' exact element={<UpdateS/>}></Route>
          <Route path='/Pages/TeachersList' exact element={<TeachersList/>}></Route>
          <Route path='/Pages/StudentDashboard' exact element={<StudentDashboard/>}></Route>
          <Route path='/Pages/Notice' exact element={<Notice/>}></Route>
          <Route path='/Pages/NoticeBoard' exact element={<NoticeBoard/>}></Route>
          <Route path='/Pages/AddTeacher' exact element={<AddTeacher/>}></Route>
          <Route path='/Pages/AddStudent' exact element={<AddStudent/>}></Route>
          <Route path='/components/leave' exact element={<Leave/>}></Route>
          <Route path='/Pages/Homework' exact element={<Homework/>}></Route>
          <Route path='/Pages/LeaveList' exact element={<LeaveList/>}></Route>
          <Route path='/Pages/HomeworkSheet' exact element={<HomeworkSheet/>}></Route>
          </Route>
          </Routes> 
        
      </Router>
      <Footer />
      </div>
  );
}

export default App;
