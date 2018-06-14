import React from "react";
import { connect } from 'react-redux';
import { setTextFilter, sortbyAmount, sortbyDate } from "../actions/filters";

class ExpenseListFilters extends React.Component {
  render() {
    return (
      <div>
        {/* {console.log(this.props)} */}
        <input 
          type="text" 
          value={this.props.filters.text} 
          onChange={(event) => {
            // use dispatch to update the Redux store
            // so the input value is always be the text value in the store
            // const setTextFilter = (text = "") =>{}
            this.props.dispatch(setTextFilter(event.target.value));
          }}
        />
        <select 
          value={this.props.filters.sortBy}
          onChange={(event) => {
            if(event.target.value === 'date') {
              this.props.dispatch(sortbyDate());
            } else if(event.target.value === 'amount') {
              this.props.dispatch(sortbyAmount())
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);

