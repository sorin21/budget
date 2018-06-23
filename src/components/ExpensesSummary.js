import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';


const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense':'expenses';
  const formattedExpenseTotal = numeral(expensesTotal).format('0,0.00');
  return (
    <div>
      <h1>View {expenseCount} {expenseWord} with total {formattedExpenseTotal}.</h1>
    </div>
  );
};
const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    // call selectExpenseTotal not will all expenses
    // but just with the visible ones
    expensesTotal: selectExpenseTotal(visibleExpenses)
  }
}
export default connect(mapStateToProps)(ExpensesSummary);