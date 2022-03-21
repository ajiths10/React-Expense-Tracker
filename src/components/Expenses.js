import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
         <ExpenseItem amount={props.amount} date={props.date}></ExpenseItem>
    </Card>
  );
}

export default Expenses;