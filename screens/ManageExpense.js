import { StyleSheet, View } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";
import { ExpensesContext } from "../store/expensesContext";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpense = ( { route, navigation } ) => {
  const expensesCtx = useContext( ExpensesContext );
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const selectedExpense = expensesCtx.expenses.find(expense => 
    expense.id === editedExpenseId)
  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense( editedExpenseId );
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = (expenseData) => {
    if ( isEditing ) {
      expensesCtx.updateExpense( editedExpenseId, expenseData );
    } else {
      expensesCtx.addExpense( expenseData );
    }
    navigation.goBack();
  };
  useLayoutEffect( () => {
    navigation.setOptions( {
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    } );
  }, [ navigation, isEditing ] );
  return (
    <View style={ styles.container }>
      <ExpenseForm onSubmit={confirmHandler} submitButtonLabel={isEditing ? 'Update' : 'Add'} onCancel={cancelHandler} defaultValues={selectedExpense} />
      <View style={ styles.deleteContainer }>
        { isEditing && <IconButton icon='trash' color={ GlobalStyles.colors.error500 } size={ 36 } onPress={ deleteExpenseHandler } /> }
      </View>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
} );