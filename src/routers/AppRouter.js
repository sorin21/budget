import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import AddExpense from '../AddExpense';
import Dashboard from '../Dashboard';
import EditExpese from '../EditExpese';
import Header from '../Header';
import Help from '../Help';
import NotFound from '../NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpese} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
