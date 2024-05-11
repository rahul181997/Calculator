import React, { useState } from 'react';
import "../Component/Calculator.css"

const Button = ({ value, handleClick }) => {
    return (
        <button className="grid-item" onClick={() => handleClick(value)}>{value}</button>
    )
}

function Calculator() {
    const [input, setInput] = useState('')
    const [total, setTotal] = useState(0);
    const [error, setError] = useState('');

    const handleClick = (value) => {
        setInput(prev => {
            return prev + value;
        })
    }

    const handleClear = () => {
        setInput('')
        setTotal('')
        setError('');
    }

    const handleTotal = () => {
        if (input.trim() === '') {
            setError('Error: No expression entered');
            setTotal('');
        } else {
            try {
                setTotal(eval(input))
                setError('');
            } catch (error) {
                setError('Error');
                setTotal('');
            }
        }
    }

    return (
        <div style={{
            "width": "400px",
            "height": "500px",
            "backgroundColor": "rgb(237, 237, 237)",
            "marginTop": "50px"
        }}>
            <h1>React Calculator</h1>
            <input type='text' name='inputbox' value={input} onChange={() => { }} />
            <p>{total}</p>
            <div className="grid-container" >
                <Button value={7} handleClick={handleClick} />
                <Button value={8} handleClick={handleClick} />
                <Button value={9} handleClick={handleClick} />
                <Button value="+" handleClick={handleClick} />
                <Button value={4} handleClick={handleClick} />
                <Button value={5} handleClick={handleClick} />
                <Button value={6} handleClick={handleClick} />
                <Button value="-" handleClick={handleClick} />
                <Button value={1} handleClick={handleClick} />
                <Button value={2} handleClick={handleClick} />
                <Button value={3} handleClick={handleClick} />
                <Button value="*" handleClick={handleClick} />
                <Button value="C" handleClick={handleClear} />
                <Button value={0} handleClick={handleClick} />
                <Button value="=" handleClick={handleTotal} />
                <Button value="/" handleClick={handleClick} />
            </div>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Calculator;
