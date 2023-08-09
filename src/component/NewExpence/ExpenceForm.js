import "./ExpenceForm.css";
import {useState} from "react"

const ExpenceForm = () => {
    const [enteredTitle,setTitle] = useState('');
    const [enteredAmount ,setAmount] = useState('');
    const [enteredDate,setDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate:'',
    // }); 

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
        // setUserInput({
        //     ...userInput , 
        //     enteredTitle : event.target.value,
        // });
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
        // setUserInput({
        //     ...userInput , 
        //     enteredAmount: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     return ({...prevState , enteredAmount: event.target.value})
        // })


    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
        // setUserInput({
        //     ...userInput , 
        //     enteredDate: event.target.value,
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            title:enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate),
        }

        console.log(data);
    }



    return(<form onSubmit={submitHandler}>
        <div className = "new-expense__controls">
            <div className = "new-expense__controls">
                <label>Title</label>
                <input type = "text" onChange = {titleChangeHandler}/>
            </div>

            <div className = "new-expense__controls">
                <label>Amount</label>
                <input 
                type = "number" 
                min = "0.01" 
                step = "0.01"
                onChange = {amountChangeHandler}
                />
            </div>

            <div className = "new-expense__controls">
                <label>Date</label>
                <input 
                type = "Date" 
                min= "2019-01-01" 
                max = "2023-12-31"
                onChange = {dateChangeHandler}
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expence</button>
        </div>
    </form>)

}

export default ExpenceForm