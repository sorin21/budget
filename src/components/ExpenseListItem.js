import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
// import { removeExpense } from '../actions/expenses';
import moment from "moment";
import numeral from "numeral";
// destruct the props
// const ExpenseListItem = ({ id, dispatch,  description, amount, createdAt, note }) => {
const ExpenseListItem = (props) => {
  return (
    <div>
      <Link to={`/edit/${props.expense.id}`}>
        <h3>{props.expense.description}</h3>
      </Link>
      <p>Amount: {numeral(props.expense.amount).format('0,0.00')+' lei'} </p>
      <p>Created At: {moment(props.expense.createdAt).format('MMMM Do, YYYY HH:mm')}</p>
      <p>Note: {props.expense.note}</p>
      {/* <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
      }}>Remove</button> */}
    </div>
  );
};

// connect was only for remove button to use dispatch
// export default connect()(ExpenseListItem);
export default ExpenseListItem;
