import { Navbar } from '../components/layouts/Navbar'
import { DashBoard } from '../pages/Principal/BuscadorCanchitas'
import { DashBoardCanchero } from '../pages/Canchero'
import { NavbarCanchero } from "../components/layouts/NavbarCanchero";
import { CancheroPerfil } from "../pages/Canchero/Perfil";
import { TableroCanchita } from '../pages/Canchero/AdminCanchitas';
import {HomeScreen} from '../pages/Principal/inicio'
import { InfoRegistro } from '../pages/Principal/Registro';


export const rutas=([
  {
    path:"/",
    element:<Navbar/>,
    
    children:[
      {
        path:"/",
        element: <HomeScreen />,
        name:"Home"
      },
      {
        path:"/registro",
        element:<InfoRegistro />,
        name:"RegisterUser"
      },
      {
        path:"/canchitas",
        element:<DashBoard/>,
        name:"Canchitas",
        // children:[
        //   {
        //     path:"/canchitas/:id",
        //     element:<Canchita/>,
            
        //   }
          
        // ]
      },
    ]
  },
  {
    path:"/canchero",
    element:<NavbarCanchero/>,
    name:"Canchero",
    children:[
      {
        path:"/canchero/",
        element:<DashBoardCanchero/>,
        name:"HomeCanchero"
      },
      {
        path:"/canchero/perfil",
        element:<CancheroPerfil/>,
        name:"Canchero Perfil"
      },
      {
        path:"/canchero/canchita/:cancheroid",
        element:<TableroCanchita/>,
        name:"Tablero Canchita"
      },
      
    ]
  },
  
])
