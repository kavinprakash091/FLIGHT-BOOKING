import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  userDetails: localStorage.getItem('userDetails')
    ? JSON.parse(localStorage.getItem('userDetails'))
    : null,
  airports: localStorage.getItem('airports')
    ? JSON.parse(localStorage.getItem('airports'))
    : [],
  airlines: localStorage.getItem('airlines')
    ? JSON.parse(localStorage.getItem('airlines'))
    : [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return { ...state, userDetails: action.payload };
    case 'SIGN_IN':
      return { ...state, userDetails: action.payload };
    case 'SIGN_OUT':
      return { ...state, userDetails: null };
    case 'ADD_AIRPORT':
      return { ...state, airports: action.payload };
    case 'ADD_AIRLINES':
      return { ...state, airlines: action.payload };
    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}> {props.children} </Store.Provider>;
}
