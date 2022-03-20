import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 3, 15);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  const LocationOfExpenditure = 'High Hill';
  return (
    <div className="expense-item">
      <div>Tme: {expenseDate.toISOString() } </div>
      <div> //  Location:{LocationOfExpenditure} </div>
      <div className="expense-item__description">
        <h2>{expenseTitle} </h2>
        <div className="expense-item__price"> ${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
