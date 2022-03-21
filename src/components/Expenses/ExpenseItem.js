import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import './ExpenseItem.css';
import App from "../../App"

const ExpenseItem=(props)=> {
  
  const clickHandeler = ()=>{
    props="";
    console.log(props)
    console.log('Delete sucessFull');
  };


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} />
      <button onClick={clickHandeler}>Delete</button>
    </Card>
    
  );
}

export default ExpenseItem;
