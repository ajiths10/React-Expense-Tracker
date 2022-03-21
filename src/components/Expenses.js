import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <div className="expenses">
         <ExpenseItem amount={props.amount} date={props.date}></ExpenseItem>
    </div>
  );
}

export default Expenses;