import { StyleSheet, View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";

const ExpenseForm = ( { submitButtonLabel, onCancel, onSubmit, defaultValues } ) => {
  const [ inputs, setInputs ] = useState( {
    amount: { value: defaultValues ? defaultValues.amount.toString() : '', isValid: !!defaultValues },
    date: { value: defaultValues ? getFormattedDate( defaultValues.date ) : '', isValid: !!defaultValues },
    description: { value: defaultValues ? defaultValues.description : '', isValid: !!defaultValues }
  } );
  const inputChangedHandler = ( inputIdentifier, enteredValue ) => {
    setInputs( currInputs => {
      return {
        ...currInputs,
        [ inputIdentifier ]: { value: enteredValue, isValid: true }
      };
    } );
  };
  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date( inputs.date.value ),
      description: inputs.description.value
    };
    const amountIsValid = !isNaN( expenseData.amount ) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if ( !amountIsValid || !dateIsValid || !descriptionIsValid ) {
      Alert.alert( 'Invalid input', 'Please check your input values' );
      setInputs( currInputs => {
        return {
          amount: { value: currInputs.amount.value, isValid: amountIsValid },
          date: { value: currInputs.date.value, isValid: dateIsValidIsValid },
          description: { value: currInputs.description.value, isValid: descriptionIsValid }
        };
      } );
      return;
    }
    onSubmit( expenseData );
    const formIsInvalid = !amountIsValid || !dateIsValid || !descriptionIsValid;
  };
  return (
    <View style={ styles.form }>
      <Text style={ styles.title }>Your Expense</Text>
      <View style={ styles.inputsForm }>
        <Input label="Amount" style={ styles.rowInput } textInputConfig={ {
          keyboardType: 'decimal-pad',
          onChangeText: inputChangedHandler.bind( this, 'amount' ),
          value: inputs.amount.value
        } } />
        <Input label="Date" style={ styles.rowInput } textInputConfig={ {
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: inputChangedHandler.bind( this, 'date' ),
          value: inputs.date.value
        } } />
      </View>
      <Input label="Description" textInputConfig={ {
        multiline: true,
        onChangeText: inputChangedHandler.bind( this, 'description' ),
        value: inputs.description.value
        // autoCapitalize: 'none',
        // autoCorrect: false  //default is true
      } } />
      {formIsInvalid && (
        <Text>Invalid input values - Please check your entered data!</Text>
      )}
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