import "./ExpenceDate.css";

const  ExpenceDate = (props) => {
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const Year = props.date.toLocaleString('en-US',{day:'2-digit'});
    const Day = props.date.getFullYear();
    return(<div className="expense-date">
    
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{Year}</div>
        <div className="expense-date__day">{Day}</div>

    </div>)
}

export default ExpenceDate;