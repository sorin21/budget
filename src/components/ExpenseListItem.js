import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

// destruct the props
// const ExpenseListItem = ({ id, description, amount, createdAt, note }) => {
const ExpenseListItem = (props) => {
  return (
    <div>
      <Link to={`/edit/${props.expense.id}`}>
        <h3>{props.expense.description}</h3>
      </Link>
      <p>Amount: {props.expense.amount} </p>
      <p>Created At: {props.expense.createdAt}</p>
      <p>Note: {props.expense.note}</p>
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
      }}>Remove</button>
    </div>
  );
};

export default connect()(ExpenseListItem);
