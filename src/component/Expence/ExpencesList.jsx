import "./ExpencesList.css"
import ExpenceItem from "./ExpenceItem"
const ExpencesList = (props) => {
    if(props.items.length === 0) {
        return <h2 className="expences-list_fallback">Item Not Found....</h2>
    }
      return (
        <ul className="expences-list">
            {   props.items.length > 0 && 
                props.items.map((value) => (
                <ExpenceItem 
                key = {value.id}
                title = {value.title}
                amount = {value.amount}
                date = {value.date}
                />))
            }
        </ul>
       )
}
export default ExpencesList