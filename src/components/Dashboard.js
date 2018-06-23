import React from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from './ExpensesSummary';
import classes from '../App.scss';

const Dashboard = () => {
  return <div className = {classes.container} >
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />
    </div>;
};

export default Dashboard;