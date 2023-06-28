import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Input from "./Input";

const ExpenseForm = () => {
  const amountChangedHandler = () => {

  };
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={ styles.inputsForm }>
        <Input label="Amount" style={styles.rowInput} textInputConfig={ {
          keyboardType: 'decimal-pad',
          onChangedText: amountChangedHandler
        } } />
        <Input label="Date" style={styles.rowInput} textInputConfig={ {
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangedText: () => { }
        } } />
      </View>
      <Input label="Description" textInputConfig={ {
        multiline: true,
        // autoCapitalize: 'none',
        // autoCorrect: false  //default is true
      } } />
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
  }
} );