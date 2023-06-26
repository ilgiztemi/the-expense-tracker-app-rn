import { StyleSheet, Text, View } from 'react-native';
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/style";

const ExpensesOutput = ( { expenses, expensesPeriod, fallBackText } ) => {
  return (
    <View style={ styles.container }>
      <ExpensesSummary expenses={ expenses } periodName={ expensesPeriod } />
      { expenses.length > 0 ?
        <ExpensesList expenses={ expenses } />
        : <Text style={ styles.infoText }>{ fallBackText }</Text>
      }
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
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32
  }
} );