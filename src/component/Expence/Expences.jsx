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


 const filteredItem = props.items.filter((value) => {
    return value.date.getFullYear().toString() === filteredYear
 })

  return (
    <Card className="expenses">
    <ExpenceFilter 
    selected = {filteredYear} 
    onFilterChange = {filterChangeHandler}/>

      {filteredItem.length === 0 && <p>No item found</p>}
      
      {filteredItem.length > 0 && 
        filteredItem.map((value) => (
        <ExpenceItem 
        key = {value.id}
        title = {value.title}
          amount = {value.amount}
          date = {value.date}
        />))
      } 
    </Card>
  );
}

export default Expenses;