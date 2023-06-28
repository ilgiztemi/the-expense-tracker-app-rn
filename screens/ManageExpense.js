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
  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense( editedExpenseId );
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if ( isEditing ) {
      expensesCtx.updateExpense( editedExpenseId, { description: 'Test!!!!', amount: 29.99, date: new Date( '2022-05-20' ) } );
    } else {
      expensesCtx.addExpense( { description: 'Test', amount: 19.99, date: new Date( '2022-05-19' ) } );
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
      <ExpenseForm submitButtonLabel={isEditing ? 'Update' : 'Add'} onCancel={cancelHandler} />
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