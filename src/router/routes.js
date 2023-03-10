import { DashBoard } from '../pages/Principal/BuscadorCanchitas';
import { HomeScreen } from '../pages/Principal/inicio';
import { InfoRegistro } from '../pages/Principal/Registro';

import { DashBoardCanchero } from '../pages/Canchero';
import { CancheroPerfil } from '../pages/Canchero/Perfil';
import { TableroCanchita } from '../pages/Canchero/AdminCanchitas';
import { TableroCanchitaUsuario } from '../pages/Principal/ReservaCanchitas';

export const publicRoutes = [
  {
    path: '/',
    component: <HomeScreen />,
    name: 'Home',
  },
  {
    path: '/registro',
    component: <InfoRegistro />,
    name: 'RegisterUser',
  },
  {
    path: '/canchitas',
    component: <DashBoard />,
    name: 'Canchitas',
  },
  {
    path: '/canchitas/:canchitaid',
    component: <TableroCanchitaUsuario />,
    name: 'Tablero Canchita Principal',
  },
];

export const privateRoutes = [
  {
    path: '/canchero',
    component: <DashBoardCanchero />,
    name: 'HomeCanchero',
  },
  {
    path: '/canchero/perfil',
    component: <CancheroPerfil />,
    name: 'Canchero Perfil',
  },
  {
    path: '/canchero/canchita/:cancheroid',
    component: <TableroCanchita />,
    name: 'Tablero Canchita',
  },
];
