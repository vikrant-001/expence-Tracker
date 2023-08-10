
import Card from '../UI/Card'
import './Expence.css';
import ExpenceFilter from './ExpenceFilter';
import { useState } from 'react';
import ExpencesList from './ExpencesList';
import ExpenceChart from './ExpenceChart';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectfiltered) => {
    setFilteredYear(selectfiltered);
  };


 const filteredItem = props.items.filter((value) => {
    return value.date.getFullYear().toString() === filteredYear
 })

  return (
    <li>
        <Card className="expenses">
      <ExpenceFilter 
      selected = {filteredYear} 
      onFilterChange = {filterChangeHandler}/>

        <ExpenceChart expences = {filteredItem}/>

        <ExpencesList items = {filteredItem}/>
      </Card>
    </li>
  );
}

export default Expenses;