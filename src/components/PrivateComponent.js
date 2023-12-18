import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const PrivateComponent =()=>{
    const auth= localStorage.getItem("admin")||localStorage.getItem("teacher")||localStorage.getItem("student");
    return auth?<Outlet/>:<Navigate to='/'/>
}

export default PrivateComponent;