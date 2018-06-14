import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// we get props from connect(): expenses and dispatch
const ExpenseList = (props) => {
  console.log(props.expenses)
  return (
    <div>
      <h1>Expense List</h1>
      {props.expenses.map((expense) => {
        // here we have access to each expense: description, amount, createdAt
        // so in this way, {...expense}, we can destruct the props on ExpenseListItem
        {/* console.log({...expense}) */}
        {/* return <ExpenseListItem {...expense} key={expense.id} />; */}
        return <ExpenseListItem 
          expense={expense} 
          key={expense.id} 
        />;
      })}

    </div>
  );
};

// mapStateToProps maps the state store to component props
// 1st arg is the entire state, store state
// in return obj usually we have keys from the state
const mapStateToProps = (state) => {
  return {
    // this expenses is key from the state
    // now this expenses is available to props
    expenses: selectExpenses(state.expenses, state.filters)  
  }
}

// 1st argumets is what we want to connect
// so we have the whole store, but we need only a subset
// the callback function mapStateToProps determine what infomation from the store
// we want our component to be able to access.
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;