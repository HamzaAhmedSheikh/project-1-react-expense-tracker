import React, { createContext, useReducer } from 'react'

import AppReducer from './AppReducer'

// Initial State 

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 },
    ]
}

// Create Context

export const GlobalContext = createContext(initialState);

// Provider Component
 
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions that are going to make call to our reducer funtion

  function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id //  any data we want to sent to it which is going to be the id
    })
}

  function addTransaction(transaction) {
      dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
    })
}



   return (
       <GlobalContext.Provider value={{
           transactions: state.transactions,
           deleteTransaction,
           addTransaction
       }}>

           {children}
       </GlobalContext.Provider>
   )  
}