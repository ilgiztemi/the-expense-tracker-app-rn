import { StyleSheet, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";
import Button from "../components/UI/Button";

const ManageExpense = ( { route, navigation } ) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const deleteExpenseHandler = () => {
    navigation.goBack();

  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    navigation.goBack();

  };
  useLayoutEffect( () => {
    navigation.setOptions( {
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    } );
  }, [ navigation, isEditing ] );
  return (
    <View style={ styles.container }>
      <View style={ styles.buttons }>
        <Button style={styles.button} mode='flat' onPress={ cancelHandler }>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>{ isEditing ? 'Update' : 'Add' }</Button>
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
} );