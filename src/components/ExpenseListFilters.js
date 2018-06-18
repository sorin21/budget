import React from "react";
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'
import {
  setTextFilter,
  sortbyAmount,
  sortbyDate,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        {/* We have filter props because of connect and mapStateToProps */}
        {/* {console.log(this.props)} */}
        <input
          type="text"
          value={this.props.filters.text}
          onChange={event => {
            // use dispatch to update the Redux store
            // so the input value is always be the text value in the store
            // const setTextFilter = (text = "") =>{}
            this.props.dispatch(setTextFilter(event.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={event => {
            if (event.target.value === "date") {
              this.props.dispatch(sortbyDate());
            } else if (event.target.value === "amount") {
              this.props.dispatch(sortbyAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          // method above
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          // method above
          onFocusChange={this.onFocusChange}
          startDateId={this.props.filters.text}
          endDateId={this.props.filters.text}
          // only one month per calendar
          numberOfMonths={1}
          // to anable the dates in past
          isOutsideRange={() => false}
          // add a X to clear dates
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);

