import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import './ExpenseItem.css';
import App from "../../App"

const ExpenseItem=(props)=> {
  
  const [money, setTitle] = useState(props.amount.money);
  
  const clickHandler = ()=>{
    setTitle('100$');
    console.log(`${money} Updated!`);
  };


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} money={money}/>
      <button onClick={clickHandler}>Change Amount</button>
    </Card>
    
  );
}

export default ExpenseItem;
