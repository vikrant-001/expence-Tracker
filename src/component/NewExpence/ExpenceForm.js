import "./ExpenceForm.css";

const ExpenceForm = () => {
    return(<form>
        <div className = "new-expense__controls">
            <div className = "new-expense__controls">
                <label>Title</label>
                <input type = "text"/>
            </div>

            <div className = "new-expense__controls">
                <label>Amount</label>
                <input type = "number" min = "0.01" step = "0.01"/>
            </div>

            <div className = "new-expense__controls">
                <label>Date</label>
                <input type = "Date" min= "2019-01-01" max = "2023-12-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expence</button>
        </div>
    </form>)

}

export default ExpenceForm