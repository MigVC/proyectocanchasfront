import React from 'react'
import { Routes, Route, HashRouter } from "react-router-dom"
import { HomeScreen } from '../pages/home/HomeScreen'
import { Registro } from '../pages/register/Registro'


export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<Registro />} />
      </Routes>
    </HashRouter>

  )
}
