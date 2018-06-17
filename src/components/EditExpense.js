import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const EditExpense = props => {
  // console.log(props);
  return (
    <div>
      <ExpenseForm 
      expense={props.expense}
        onSubmit={(expense) => {
          console.log('iupdated', expense)
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
        // alert(`The ${props.expense.description} was removed!`);
      }}>Remove</button>
    </div>)
};

const mapStateToProps = (state, props) => {
  // console.log(state)
  return {
    expense: state.expenses.find((expense) => {
      // returns true when finds a match
      return expense.id === props.match.params.id;
    })
  }
}
export default connect(mapStateToProps)(EditExpense);