import React from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import classes from '../App.scss';

const Dashboard = () => {
  return <div className = {classes.container} >
      <ExpenseListFilters />
      <ExpenseList />
    </div>;
};

export default Dashboard;