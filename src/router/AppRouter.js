import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Registro } from '../pages/register/Registro'
import { Navbar } from '../components/Navbar'
import { HomeScreen } from '../pages/home/HomeScreen'
import { DashBoard } from '../pages/DashBoard/DashBoard'


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Registrarse" element={<Registro />} />
        <Route path="DashBoard" element={<DashBoard />} />
        <Route exact path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
    

  )
}
