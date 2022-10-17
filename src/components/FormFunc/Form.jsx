import React, {useState} from "react";
import {Button} from "./Button";
import {Input} from "./Input";


export const Form = () => {

    const [name,] = useState('click')
    const [value, setValue] = useState('')
    const [message, setMessage] = useState([])
    const [visible, setVisible] = useState(true)


    const handleClick = (e) => {
        setMessage([...message, value])
        setValue('')
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }


    return <>
        {visible && <ul className="HeaderBox">
            {message.map(message =>
                <li>{message}</li>
            )}
        </ul>}
        <Input change={handleChange} value={value}/>
        <Button name={name} click={handleClick}/>
        <br/>
        <button onClick={() => setVisible(!visible)}>
            {visible ? 'Hide' : 'Show'}</button>
    </>
}

