import ExpenceItem from './ExpenceItem';
import Card from '../UI/Card'
import './Expence.css';
import ExpenceFilter from './ExpenceFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectfiltered) => {
    setFilteredYear(selectfiltered);
  };

  return (
    <Card className="expenses">
    <ExpenceFilter selected = {filteredYear} onFilterChange = {filterChangeHandler}/>
      <ExpenceItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenceItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenceItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenceItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;