import React, { useContext } from 'react';
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expensesContext";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput expenses={ expensesCtx.expenses } expensesPeriod="Total" fallBackText="No expenses registered found." />
  );
};

export default AllExpenses

