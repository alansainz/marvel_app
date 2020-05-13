import React from 'react';
import { getCharactersData } from './utils/assets';

export const Store = React.createContext();

const initialState = {
  characters: [],
  charactersError: null,
  noResults: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'GET_RANDOM_CHARACTER':
      return {
        ...state,
        characters: getCharactersData(action.payload),
      };
    case 'GET_RANDOM_CHARACTER_FAIL':
      return { ...state, charactersError: action.payload };
    case 'GET_CHARACTERS':
      console.log('hello action', action);
      return {
        ...state,
        characters: getCharactersData(action.payload),
        noResults: !action.payload.data.total,
      };
    case 'GET_CHARACTERS_FAIL':
      return { ...state, charactersError: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <Store.Provider value={value}>{props.children}</Store.Provider>
  );
}
