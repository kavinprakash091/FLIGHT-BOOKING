import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  userDetails: localStorage.getItem('userDetails')
    ? JSON.parse(localStorage.getItem('userDetails'))
    : null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return { ...state, userDetails: action.payload };
    case 'SIGN_IN':
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}> {props.children} </Store.Provider>;
}
