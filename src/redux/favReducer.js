import { types } from "../types/types";

const initialState = {
  favoritas: [],
};

export const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.favAdd:
      return {
        ...state,
        favoritas: action.payload,
      };

    case types.favRead:
      return {
        ...state,
        favoritas: action.payload,
      };

    case types.favDelete:
      return {
        ...state,
        favoritas: state.favoritas.filter((elemento) => {
          return elemento.id !== action.payload;
        }),
      };

    case types.favClean:
      return {
        ...state,
        favoritas: [],
      };

    default:
      return state;
  }
};
