import React from 'react';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/layouts/Navbar';
import { AuthUserContext } from '../context/AuthUserContext';
import { publicRoutes, privateRoutes } from './routes';
import { NavbarCanchero } from '../components/layouts/NavbarCanchero';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  const { user } = useContext(AuthUserContext);

  return (
    <BrowserRouter>
      {user ? (
        <>
          <NavbarCanchero />
        </>
      ) : (
        <>
          <Navbar />
        </>
      )}
      <Routes>
        {publicRoutes.map(({ path, component }, index) => (
          <Route key={index} path={path} element={component} />
        ))}
        {privateRoutes.map(({ path, component }, index) => (
          <Route element={<PrivateRoute user={user} />}>
            <Route path={path} element={component} />
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};
