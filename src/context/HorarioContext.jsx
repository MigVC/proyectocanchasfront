import React, { createContext, useReducer } from 'react';
import { horarioReducer } from './HorarioReducer';

const horarioInicialState = {
  fecha: new Date(),
};

export const HorarioContext = createContext({});

export const HorarioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(horarioReducer, horarioInicialState);

  const setHorario = async (fecha) => {
    dispatch({
      type: 'setHorario',
      payload: {
        fecha,
      },
    });
  };

  return (
    <HorarioContext.Provider
      value={{
        ...state,
        setHorario,
      }}
    >
      {children}
    </HorarioContext.Provider>
  );
};