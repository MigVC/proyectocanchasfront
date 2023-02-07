import { Navbar } from '../components/layouts/Navbar';
import { DashBoard } from '../pages/Principal/BuscadorCanchitas';
import { DashBoardCanchero } from '../pages/Canchero';
import { NavbarCanchero } from '../components/layouts/NavbarCanchero';
import { CancheroPerfil } from '../pages/Canchero/Perfil';
import { TableroCanchita } from '../pages/Canchero/AdminCanchitas';
import { HomeScreen } from '../pages/Principal/inicio';
import { InfoRegistro } from '../pages/Principal/Registro';
import { TableroCanchitaUsuario } from '../pages/Principal/ReservaCanchitas';

export const rutasPublicas = [
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <HomeScreen />,
        name: 'Home',
      },
      {
        path: '/registro',
        element: <InfoRegistro />,
        name: 'RegisterUser',
      },
      {
        path: '/canchitas',
        element: <DashBoard />,
        name: 'Canchitas',
      },
      {
        path: '/canchitas/:canchitaid',
        component: <TableroCanchitaUsuario />,
        name: 'Tablero Canchita Principal',
      },
    ],
  },
];

export const rutasPrivadas = [
  {
    path: '/canchero',
    element: <NavbarCanchero />,
    name: 'Canchero',
    children: [
      {
        path: '/canchero/',
        element: <DashBoardCanchero />,
        name: 'HomeCanchero',
      },
      {
        path: '/canchero/perfil',
        element: <CancheroPerfil />,
        name: 'Canchero Perfil',
      },
      {
        path: '/canchero/canchita/:cancheroid',
        element: <TableroCanchita />,
        name: 'Tablero Canchita',
      },
    ],
  },
];
