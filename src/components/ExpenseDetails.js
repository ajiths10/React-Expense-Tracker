import "./ExpenseItem.css";

function ExpenseDetails(props) {
  let amount = props.amount.money;
  let title = props.amount.title;
  let location = props.amount.location;

  return (
    <div>
      <div> Location: {location} </div>
      <div className="expense-item__description">
        <h2>{title} </h2>
        <div className="expense-item__price"> ${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseDetails;
