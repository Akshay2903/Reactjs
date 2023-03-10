import ExpenseItem from "./components/ExpenseItem";


function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Watching movies',
      amount: 200,
      date: new Date(2022, 3, 19),
      place: 'Meerut'
    },
    {
      id: 'e2',
      title: 'Buying groceries',
      amount: 1200,
      date: new Date(2022, 2, 29),
      place: 'Noida'
    },
    {
      id: 'e3',
      title: 'Buying Clothes',
      amount: 2000,
      date: new Date(2022, 4, 11),
      place: 'Gurugram'
    },
    {
      id: 'e4',
      title: 'Eating Pizza',
      amount: 700,
      date: new Date(2022, 5, 12),
      place: 'Delhi'
    }
  ]
  return (
    <div>
      <h1>Learn React</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} place={expenses[0].place}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} place={expenses[1].place}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} place={expenses[2].place}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} place={expenses[3].place}/>
    </div>
  );
}

export default App;
