import React, { Component } from 'react';
import moment from "moment";
import { SingleDatePicker } from 'react-dates';
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

class ExpenseForm extends Component {
  state = {
    description: this.props.expense ? this.props.expense.description : '',
    note: this.props.expense ? this.props.expense.note : '',
    // convert it to string
    amount: this.props.expense ? (this.props.expense.amount).toString() : '',
    // createdAt now, this moment
    createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
    calendarFocused: false,
    error: ''
  };

  onDescriptionChange = event => {
    // put event.target.value in his own variable
    // otherwise will get an error because
    // we access the prop target that doesn't work in a callback
    // like this.setState(() => ({ description: event.target.value }))
    const description = event.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = event => {
    const note = event.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = event => {
    const amount = event.target.value;
    // we use !amount so the user can select
    // the amount and delete it
    // starts witd decimals
    // at least one number(to infinity) and not with .
    // then we have a .
    // then we have only 2 decimals in the end
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    // we put if() so the user now will not be able
    // to delete the date from input
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  // destructuring focused attr from SingleDatePicker
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log('props', this.props);
    // if no desc and amount
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide description and amount'
      }));
    } else {
      this.setState(() =>({error: ''}))
      this.props.onSubmit({
        description: this.state.description,
        // we work in base 10 and *100 to transfor from cents
        amount: parseFloat(this.state.amount, 10),
        // to trasf in miliseconds use the valueOf()
        // method from  moment website
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Desciption"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            // make every single day available
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense(optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;