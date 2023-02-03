export const horarioReducer = (state, action) => {
    switch (action.type) {
      case 'setHorario':
        return {
          ...state,
          fecha: action.payload.fecha,
        };
  
      default:
        return state;
    }
  };