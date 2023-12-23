import React from 'react'
import { Routes, Route } from "react-router-dom";
import Auth from './Pages/Auth/Auth'
import Home from './Pages/Home/Home';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
      <Route path="/auth" element={<Auth/>}></Route>
    </Routes>
  )
}

export default AllRoutes
