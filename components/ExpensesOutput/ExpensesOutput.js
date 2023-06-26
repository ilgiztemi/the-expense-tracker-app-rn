import { StyleSheet, Text, View } from 'react-native';
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/style";

const ExpensesOutput = ( { expenses, expensesPeriod } ) => {
  return (
    <View style={ styles.container }>
      <ExpensesSummary expenses={ expenses } periodName={ expensesPeriod } />
      <ExpensesList expenses={ expenses } />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create( {
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    paddingBottom: 0,
    flex: 1
  }
} );