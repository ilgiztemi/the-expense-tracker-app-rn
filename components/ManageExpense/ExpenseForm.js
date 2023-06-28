import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import Input from "./Input";
import Button from "../UI/Button";

const ExpenseForm = ({submitButtonLabel, onCancel, onSubmit}) => {
  const [ inputValues, setInputValues ] = useState( {
    amount: '',
    date: '',
    description: ''
  } );
  const inputChangedHandler = ( inputIdentifier, enteredValue ) => {
    setInputValues( currInputValues => {
      return {
        ...currInputValues,
        [ inputIdentifier ]: enteredValue
      };
    } );
  };
  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description
    }
    onSubmit(expenseData)
  }
  return (
    <View style={ styles.form }>
      <Text style={ styles.title }>Your Expense</Text>
      <View style={ styles.inputsForm }>
        <Input label="Amount" style={ styles.rowInput } textInputConfig={ {
          keyboardType: 'decimal-pad',
          onChangeText: inputChangedHandler.bind( this, 'amount' ),
          value: inputValues.amount
        } } />
        <Input label="Date" style={ styles.rowInput } textInputConfig={ {
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: inputChangedHandler.bind( this, 'date' ),
          value: inputValues.date
        } } />
      </View>
      <Input label="Description" textInputConfig={ {
        multiline: true,
        onChangeText: inputChangedHandler.bind( this, 'description' ),
        value: inputValues.description
        // autoCapitalize: 'none',
        // autoCorrect: false  //default is true
      } } />
      <View style={ styles.buttons }>
        <Button style={ styles.button } mode='flat' onPress={ onCancel }>Cancel</Button>
        <Button style={ styles.button } onPress={ submitHandler }>{ submitButtonLabel }</Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create( {
  form: {
    marginTop: 80
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center'
  },
  inputsForm: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    flex: 1
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
} );