import React from 'react'
import { Routes, Route, HashRouter } from "react-router-dom"
import { HomeScreen } from '../pages/home/HomeScreen'

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </HashRouter>

  )
}
