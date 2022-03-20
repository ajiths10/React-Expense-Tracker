import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "High Town",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "High Town",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "High Town",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "High Town",
    },
    {
      id: "e5",
      title: "Food",
      amount: 2,
      date: new Date(2021, 6, 13),
      location: "High Town",
    },
    {
      id: "e4",
      title: "Gas",
      amount: 46,
      date: new Date(2021, 1, 1),
      location: "High Town",
    },
    {
      id: "e4",
      title: "Movie",
      amount: 3,
      date: new Date(2021, 7, 22),
      location: "High Town",
    },
    
  ];
  let a = expenses.map(function (expenses) {
    return (
      <ExpenseItem
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
        location={expenses.location}
      ></ExpenseItem>
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
