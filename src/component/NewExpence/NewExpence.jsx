import './NewExpence.css'
import ExpenceForm from './ExpenceForm'
import { useState } from 'react';
const NewExpence = (props) => {
    const onSaveDataHandler = ((value) => {
        const expenceData = {
            ...value,
            id : Math.random().toString(),
        };
        props.updateExpence(expenceData);
    })

    return (
        <div className= "new-expence">
            <ExpenceForm onSaveData = {onSaveDataHandler}/>
        </div>
    )
}
export default NewExpence