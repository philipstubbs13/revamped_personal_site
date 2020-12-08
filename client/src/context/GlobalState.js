import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  messages: [],
  errors: [],
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function addMessage(message) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/messages', message, config);

      // @ts-ignore
      dispatch({
        type: 'ADD_MESSAGE',
        payload: res.data.data,
      });
    } catch (err) {
      // @ts-ignore
      dispatch({
        type: 'MESSAGE_ERROR',
        payload: err.response.data,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        messages: state.messages,
        errors: state.errors,
        loading: state.loading,
        addMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
