
import { Navbar } from '../components/Navbar'
import { DashBoard } from '../pages/DashBoard/DashBoard'
import { DashBoardCanchero } from '../pages/Canchero'
import { DashBoardUsuario } from '../pages/Usuario'
import { Canchita } from "../components/layout/Canchita";
import { NavbarCanchero } from "../pages/Canchero/components/Navbar";
import { NavbarUsuario } from "../pages/Usuario/components/Navbar";
import { CancheroPerfil } from "../pages/Canchero/components/CancheroPerfil";
import { HomeScreen } from "../pages/home/HomeScreen";
import { FormCanchero } from "../pages/Registro/FormCanchero";
import { FormUsuario } from '../pages/Registro/FormUsuario';
export const rutas=([
  {
    path:"/",
    element:<Navbar/>,
    
    children:[
      {
        path:"/",
        element:<HomeScreen />,
        name:"Home"
      },
      {
        path:"/registroAd",
        element:<FormCanchero />,
        name:"RegistrarCanchero"
      },
      {
        path:"/registroDep",
        element:<FormUsuario />,
        name:"RegistrarUsuario"
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
