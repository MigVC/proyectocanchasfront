import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "../pages/Home/HomeScreen";
import { Registro } from "../pages/Registro/Registro";
import { Navbar } from '../components/Navbar'
import { DashBoard } from '../pages/DashBoard/DashBoard'
import { DashBoardCanchero } from '../pages/Canchero'
import { DashBoardUsuario } from '../pages/Usuario'
import { Canchita } from "../components/layout/Canchita";
import { NavbarCanchero } from "../pages/Canchero/components/Navbar";
import { NavbarUsuario } from "../pages/Usuario/components/Navbar";
import { CancheroPerfil } from "../pages/Canchero/components/CancheroPerfil";
export const rutas=([
  {
    path:"/",
    element:<Navbar/>,
    
    children:[
      {
        path:"/",
        element:<HomeScreen/>,
        name:"Home"
      },
      {
        path:"/registro",
        element:<Registro/>,
        name:"Registrarse"
      },
      {
        path:"/canchitas",
        element:<DashBoard/>,
        name:"Canchitas",
        children:[
          {
            path:"/canchitas/:id",
            element:<Canchita/>,
            
          }
          
        ]
      },
    ]
  },
  {
    path:"/canchero",
    element:<NavbarCanchero/>,
    name:"Canchero",
    children:[
      {
        path:"/canchero",
        element:<DashBoardCanchero/>,
        name:"HomeCanchero"
      },
      {
        path:"/canchero/perfil",
        element:<CancheroPerfil/>,
        name:"Canchero Perfil"
      },
      
    ]
  },
  {
    path:"/usuario",
    element:<NavbarUsuario/>,
    name:"Usuario",
    children:[
      {
        path:"/usuario",
        element:<DashBoardUsuario/>,
        name:"HomeUsuario"
      },
      
    ]
  },
])
