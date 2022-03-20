import "./ExpenseItem.css";

function ExpenseItem(props) {


  return (
    <div className="expense-item">
      <div>Tme: {props.date.toISOString() } </div>
      <div> //  Location:{props.location} </div>
      <div className="expense-item__description">
        <h2>{props.title} </h2>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
