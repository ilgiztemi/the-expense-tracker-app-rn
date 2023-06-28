import axios from 'axios';
const backend_url = "https://expense-tracker-61478-default-rtdb.firebaseio.com";
export const storeExpense = async ( expenseData ) => {
  const response = await axios.post( backend_url + "/expenses.json", expenseData );
  const id = response.data.name;
  return id;
};
export const fetchExpenses = async () => {
  const response = await axios.get( backend_url + "/expenses.json" );
  const expenses = [];

  for ( const key in response.data ) {
    const expenseObj = {
      id: key,
      amount: response.data[ key ].amount,
      date: new Date( response.data[ key ].date ),
      description: response.data[ key ].description
    };
    expenses.push( expenseObj );
  }
  return expenses;
};
export const updateExpense = async ( id, expensesData ) => {
  return axios.put( backend_url + `/expenses/${ id }.json`, expensesData );
};
export const deleteExpense = async ( id ) => {
  return axios.delete( backend_url + `/expenses/${ id }.json` );
};