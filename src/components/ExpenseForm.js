import React, { Component } from 'react';

class ExpenseForm extends Component {
  state = {
    description: '',
    note: ''
  }

  onDescriptionChange = (event) => {
    // put event.target.value in his own variable
    // otherwise will get an error because
    // we access the prop target that doesn't work in a callback
    // like this.setState(() => ({ description: event.target.value }))
    const description = event.target.value;
    this.setState(() => ({ description }))
  }

  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState(() => ({ note }))
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" 
            placeholder="Desciption"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input type="number" 
            placeholder = "Amount"
          />
          <textarea
            placeholder="Add a note for your expense(optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;