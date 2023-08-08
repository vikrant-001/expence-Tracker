import "./ExpenceItem.css";

const  ExpenceDate = (props) => {
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const Year = props.date.toLocaleString('en-US',{day:'2-digit'});
    const Day = props.date.getFullYear();
    return(<div >
        <div>
            <div>{month}</div>
            <div>{Year}</div>
            <div>{Day}</div>
        </div>

    </div>)
}

export default ExpenceDate;