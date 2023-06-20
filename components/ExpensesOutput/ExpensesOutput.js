import { StyleSheet, Text, View } from 'react-native';
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = ({expenses, expensesPeriod}) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create( {} );