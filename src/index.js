import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
// import classes from "./index.css";
import 'normalize.css/normalize.css';
import classes from './index.scss';
import AppRouter from "./routers/AppRouter";

ReactDOM.render(<AppRouter />, document.getElementById("app"));