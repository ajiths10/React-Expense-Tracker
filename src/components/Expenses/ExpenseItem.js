import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import './ExpenseItem.css';
import App from "../../App"

const ExpenseItem=(props)=> {
  
  const [title, setTitle] = useState(props.amount.title);
  
  const clickHandler = ()=>{
    setTitle('Updated!');
    console.log(title);
  };


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} title={title}/>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
    
  );
}

export default ExpenseItem;
