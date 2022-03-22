import Card from "../UI/Card";
import "../UI/Card.css";
import "../Expenses/ExpenseItem.css";


const ExpenseForm = () => {
  const buttonHandler = () => {
      let title=document.getElementById('title');
      console.log(`Title  : ${title.value}`);
      let amount=document.getElementById('amount');
      console.log(`Amount  : ${amount.value}`);
      let date=document.getElementById('date');
      console.log(`Date  :  ${date.value}`);
  };

  return (
    <div className="expense-item__price">
      <Card className="expenses">
        <div className="expense-item" >
          Title:
          <input type="text" id="title" />
        </div>
        <div className="expense-item">
          Amount:
          <input type="text" id="amount" />
        </div>
        <div className="expense-item">
          Date:
          <input type="Date" id="date" />
        </div>
        <div className="expense-item">
          <button onClick={buttonHandler}>Submit</button>
        </div>
      </Card>
    </div>
  );
};

export default ExpenseForm;
