import React, { createContext, useEffect, useReducer } from 'react';
import swal from 'sweetalert';
import { authUserReducer } from './authUserReducer';
import cancheroRequest from '../api/apiRequest';

const InitialUser = {
  _id: '',
  nombres: '',
  sexo: '',
  avatar: '',
  correo: '',
  password: '',
  isValid: true,
  createdAt: '',
  updatedAt: '',
  __v: 0,
};

const authInicialState = {
  status: 'checking',
  type: 'noType',
  token: null,
  user: InitialUser,
  errorMessage: '',
};

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authUserReducer, authInicialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const token = window.localStorage.getItem('tokenCanchero');
      if (!token) return dispatch({ type: 'notAuthenticated' });

      const resp = await cancheroRequest.get('/auth/canchero/validation');

      if (resp.status !== 200) {
        return dispatch({ type: 'notAuthenticated' });
      }

      window.localStorage.setItem('tokenCanchero', resp.data.token.authToken);

      dispatch({
        type: 'signUp',
        payload: {
          token: resp.data.token.authToken,
          user: resp.data.canchero ? resp.data.canchero : resp.data.tutor,
        },
      });
    } catch (error) {
      dispatch({
        type: 'addError',
        payload: error.response.data.message || 'Vuelva a ingresar por favor',
      });
    }
  };

  const signIn = async ({ correo, password }) => {
    try {
      const { data } = await cancheroRequest.post('/auth/canchero/signin', {
        correo,
        password,
      });

      swal({
        title: 'Cancha registrada',
        icon: 'success',
        buttons: 'OK',
      });

      dispatch({
        type: 'signUp',
        payload: {
          token: data.token.authToken,
          user: data.canchero,
        },
      });
      window.localStorage.setItem('tokenCanchero', data.token.authToken);
    } catch (error) {
      swal({
        title: 'Error',
        icon: 'error',
        text: error.response.data.message,
        buttons: 'OK',
      });
      dispatch({
        type: 'addError',
        payload: error.response.data.message || 'Información incorrecta',
      });
    }
  };

  const signUp = async (userData) => {
    try {
      console.log({ userData });
      const { data } = await cancheroRequest.post(
        '/auth/canchero/signup',
        userData
      );
      swal({
        title: 'Cancha registrada',
        icon: 'success',
        buttons: 'OK',
      });
      dispatch({
        type: 'signUp',
        payload: {
          token: data.token.authToken,
          user: data.canchero,
        },
      });
      window.localStorage.setItem('tokenCanchero', data.token.authToken);
    } catch (error) {
      console.log('Im in erro');
      swal({
        title: 'Error',
        icon: 'error',
        text: error.response.data.message,
        buttons: 'OK',
      });
      dispatch({
        type: 'addError',
        payload: error.response.data.message || 'Información incorrecta',
      });
    }
  };

  const logOut = async () => {
    window.localStorage.removeItem('tokenCanchero');
    dispatch({ type: 'logout' });
  };

  const removeError = () => {
    dispatch({ type: 'removeError' });
  };

  return (
    <AuthUserContext.Provider
      value={{
        ...state,
        signIn,
        logOut,
        signUp,
        removeError,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};
