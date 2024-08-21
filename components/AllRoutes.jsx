import React from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';
import AllBooks from '../pages/AllBooks'
 
import CreateBook from '../pages/CreateBook';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
 

const AllRoutes = () => {
    const roles=["CREATOR","VIEWER","VIEW_ALL"]
    const isAuthorized = (requiredRole) => roles.includes(requiredRole);
  return (
    <Routes>
      <Route path="/" element={<AllBooks/>}/> 
      <Route path="/book/create" element={isAuthorized("CREATOR") ? <CreateBook /> : <Navigate to="/login" />}  /> 
      <Route path="/user/register" element={<Registration/>}/> 
      <Route path="/user/login" element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes
