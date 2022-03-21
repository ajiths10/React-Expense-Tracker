import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",

      amount: { money: 94.12, title: "Toilet Paper", location: "High Town" },
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",

      amount: { money: 799.49, title: "New TV", location: "High Town" },
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",

      amount: { money: 294.67, title: "Car Insurance", location: "High Town" },
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",

      amount: { money: 450, title: "New Desk (Wooden)", location: "High Town" },
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",

      amount: { money: 2, title: "Food", location: "High Town" },
      date: new Date(2021, 6, 13),
    },
    {
      id: "e6",

      amount: { money: 46, title: "Gas", location: "High Town" },
      date: new Date(2021, 1, 1),
    },
    {
      id: "e7",
      amount: { money: 3, title: "Movie", location: "High Town" },
      date: new Date(2021, 7, 22),
    },
  ];

  
  let a = expenses.map(function (expenses) {
    return (
      <Expenses amount={expenses.amount} date={expenses.date} />
    );
  });

  
  return (

    <div>
      <h2>Let's get started!</h2>
      {a}
    </div>
  );
}

export default App;
