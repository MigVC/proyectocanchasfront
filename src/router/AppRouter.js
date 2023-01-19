import React from 'react'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import { rutas } from './RoutesPrincipal'
const router=createBrowserRouter(rutas)
export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
