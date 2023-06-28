import React, { useContext, useEffect, useState } from 'react';
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../util/date";
import { ExpensesContext } from "../store/expensesContext";
import { fetchExpenses } from "../util/http";

const RecentExpenses = () => {
  const expensesCtx = useContext( ExpensesContext );      
  useEffect( () => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    };
    getExpenses();
  }, [] );
  const recentExpenses = expensesCtx.expenses.filter( expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays( today, 7 );
    return ( expense.date >= date7DaysAgo );
  } );
  return (
    <ExpensesOutput expenses={ recentExpenses } expensesPeriod="Last 7 days" fallBackText="No expenses registered for the last 7 days." />
  );
};

export default RecentExpenses;
