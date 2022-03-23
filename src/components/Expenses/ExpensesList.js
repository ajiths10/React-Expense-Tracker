import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (<h2 className='expenses-list__fallback'> No expenses found </h2>);
  }

  if (props.items.length === 1) {
    return (
        <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    <li>
    <h2 className='expenses-list__fallback'> only single Expense here. please add more... </h2>
    </li>
    </ul>)
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
