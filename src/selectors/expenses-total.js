const expensesTotal = (expenses) => {
  if(expenses.length === 0) {
    return 0;
  } else {
    return expenses
      .map((expense) => expense.amount)
      .reduce((sum, value) => {
        return sum + value;
      // start counting at zero
      }, 0)
  }
}

export default expensesTotal;