import { StyleSheet, View } from 'react-native'
import React from 'react'
import Input from "./Input";

const ExpenseForm = () => {
  const amountChangedHandler = () => {

  }
  return (
    <View>
      <Input label="Amount" textInputConfig={{
        keyboardType: 'decimal-pad',
        onChangedText: amountChangedHandler
      }} />
      <Input label="Date" textInputConfig={{
        placeholder: 'YYYY-MM-DD',
        maxLength: 10,
        onChangedText: () => {}
      }} />
      <Input label="Description" />
    </View>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({})