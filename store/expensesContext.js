import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date( "2021-12-19" )
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date( "2022-01-05" )
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date( "2021-12-01" )
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date( "2022-02-19" )
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date( "2022-02-18" )
  },
  {
    id: "e6",
    description: "Some bananas",
    amount: 7.99,
    date: new Date( "2023-06-24" )
  },
  {
    id: "e7",
    description: "A book",
    amount: 16.99,
    date: new Date( "2023-06-26" )
  },
  {
    id: "e8",
    description: "Another book",
    amount: 20.59,
    date: new Date( "2023-06-25" )
  },
];

export const ExpensesContext = createContext( {
  expenses: [],
  addExpense: ( { description, amount, date } ) => { },
  deleteExpense: ( id ) => { },
  setExpenses: ( expenses ) => { },
  updateExpense: ( id, { description, amount, date } ) => { }
} );
const expensesReducer = ( state, action ) => {
  switch ( action.type ) {
    case 'ADD':
      const id = new Date().toString() + Math.random() * 14;
      return [ { ...action.payload }, ...state ];
    case 'SET':
      return action.payload;
    case 'UPDATE':
      const updatedExpenseIndex = state.findIndex( el => el.id === action.payload.id );
      const updatableExpense = state[ updatedExpenseIndex ];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [ ...state ];
      updatedExpenses[ updatedExpenseIndex ] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter( el => el.id !== action.payload );
    default:
      return state;
  }
};
const ExpensesContextProvider = ( { children } ) => {
  const [ expensesState, dispatch ] = useReducer( expensesReducer, [] );
  const addExpense = ( expensesData ) => {
    dispatch( { type: 'ADD', payload: expensesData } );
  };
  const setExpenses = (expenses => {
    dispatch({type: 'SET', payload: expenses})
  })
  const deleteExpense = ( id ) => {
    dispatch( { type: 'DELETE', payload: id } );
  };
  const updateExpense = ( id, expensesData ) => {
    dispatch( { type: 'UPDATE', payload: { id: id, data: expensesData } } );
  };
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  };
  return (
    <ExpensesContext.Provider value={ value }>
      { children }
    </ExpensesContext.Provider>
  );
};
export default ExpensesContextProvider;