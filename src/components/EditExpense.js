import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const EditExpense = props => {
  console.log(props);
  return <div>Edit Page Edit with id {props.match.params.id}</div>;
};

export default EditExpense;