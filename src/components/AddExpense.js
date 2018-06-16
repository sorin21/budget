import React from 'react';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpense = (props) => {
  console.log(props)
  return (
    <div> 
      <h1>Add Expense</h1>
      <ExpenseForm 
        // we add onSubmit here so we can use
        // the ExpenseForm in other places
        // the function is executed here
        // that is why we get back from ExpenseForm
        // the expense object
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          props.history.push('/');
          // console.log(expense)
          // console.log(props)

        }} />
    </div>
  );
};

export default connect()(AddExpense);