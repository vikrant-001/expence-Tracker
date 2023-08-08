import ExpenceDate from "./ExpenceDate";
const  ExpenceDetails = (props) => {

    return(<div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>)
}

export default ExpenceDetails;