import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
// import classes from "./index.css";
import 'normalize.css/normalize.css';
// import './styles/styles.scss';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';



const Dashboard = () => {
  return <div> The Budget Dashboard</div>
}
const AddExpense = () => {
  return <div> Add Expense Page</div>;
};
const EditExpese = () => {
  return <div> Edit Page</div>
}
const Help = () => {
  return <div> Help Page</div>
}
const NotFound = () => {
  return (
    <div>
      404 Error - <Link to="/">Go Home</Link>
    </div>
  );
};

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/create" component={AddExpense} />
      <Route path="/edit/:id" component={EditExpese} />
      <Route path="/help" component={Help} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));