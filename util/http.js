import axios from 'axios';
const backend_url = "https://expense-tracker-61478-default-rtdb.firebaseio.com";
export const storeExpense = ( expenseData ) => {
  axios.post( backend_url + "/expenses.json", expenseData );
};
export const fetchEXpenses = async () => {
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