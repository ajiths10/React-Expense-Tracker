import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import '../UI/Card.css';
import'./Expenses.css';


const Expenses=(props)=> {
  return (
    <Card className="expenses">
         <ExpenseItem amount={props.amount} date={props.date}></ExpenseItem>
    </Card>
  );
}

export default Expenses;