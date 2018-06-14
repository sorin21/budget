import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from "./App";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import { setTextFilter } from './actions/filters';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import classes from './index.scss';
import AppRouter from "./routers/AppRouter";

// configureStore() give us access to
// store.getState, store.dispatch 
// and store.subscribe
const store = configureStore();

store.dispatch(addExpense({ description: 'Rent', amount: 1000 }))
store.dispatch(addExpense({ description: 'Water Bill', amount: 300, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 500 }))
store.dispatch(setTextFilter('bill'));


// const state = store.getState();
// console.log(state);
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log("din app.js visibleExpenses", visibleExpenses);

// Provider make the store available 
// to all components in the application
const storeProvider = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(storeProvider, document.getElementById("app"));