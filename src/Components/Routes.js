import React from 'react'
import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Reviews from "../Pages/Reviews"


const RouteTree = () => {
  return (
   <Routes >
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/reviews" element={<Reviews />} />
   </Routes>
  )
}

export default RouteTree