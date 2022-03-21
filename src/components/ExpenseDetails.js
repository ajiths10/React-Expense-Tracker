import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseDetails(props) {
  let amount = props.amount.money;
  let title = props.amount.title;
  let location = props.amount.location;

  return (
    <div >
      <div className="expense-item__description">
        <div> Location: {location} </div>
        <h2>{title} </h2>
        <div className="expense-item__price"> ${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseDetails;
