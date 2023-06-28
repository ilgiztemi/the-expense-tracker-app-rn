import axios from 'axios'
export const storeExpense = (expenseData) => {
  axios.post("https://expense-tracker-61478-default-rtdb.firebaseio.com/expenses.json", expenseData)
}