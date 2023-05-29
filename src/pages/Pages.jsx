import React from 'react'
import Home from './Home'
import {Route, Routes, Router } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'

const Pages = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cuisine/:type" element={<Cuisine/>}></Route>
        <Route path="/search/:search" element={<Searched/>}></Route>
        <Route path="/recipe/:id" element={<Recipe/>}></Route>
      </Routes>
  )
}

export default Pages
