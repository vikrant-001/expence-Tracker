import { useState } from 'react';
import './App.css';
import Expenses from "./component/Expence/Expences";
import NewExpence from './component/NewExpence/NewExpence';

const Dummy_Expence = [
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
function App() {
  const [expences,setExpences] = useState(Dummy_Expence);

  const updateExpenceHandler = ((expence) => {
    console.log(expence)
    setExpences((prevExpence) => {
      return [expence,...prevExpence]
    });
    
  })



  return (
    <div>
      <NewExpence updateExpence = {updateExpenceHandler}/>
      <Expenses items = {expences} />
    </div>
  );
 
}

export default App;
