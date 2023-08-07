import './App.css';
import ExpenceDetails from './component/ExpenceDetails';
import ExpenceDate from './component/ExpenceDate';
import "./component/ExpenceItem.css"
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div >
      
      <div className='expense-item'>
      <ExpenceDate 
      date = {expenses[0].date}/>

      <ExpenceDetails 
          title = {expenses[0].title}
          amount = {expenses[0].amount}/>
      </div>
        
        <div className='expense-item'>
          <ExpenceDate date = {expenses[1].date}/>
          <ExpenceDetails 
            title = {expenses[1].title}
            amount = {expenses[1].amount}/>
        </div>

        <div className= 'expense-item'>
          <ExpenceDate date = {expenses[2].date}/>
          <ExpenceDetails 
            title = {expenses[2].title}
            amount = {expenses[2].amount}/>
        </div>

        <div className='expense-item'>
          <ExpenceDate date = {expenses[3].date}/>
          <ExpenceDetails 
            title = {expenses[3].title}
            amount = {expenses[3].amount}/>
        </div>
      
      
    </div>
  );
}

export default App;
