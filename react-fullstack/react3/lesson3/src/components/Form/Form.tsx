import { useState } from 'react';
import Boom from '../Boom/Boom';
import './Form.css';

function Form() {
    const [counter, setCounter] = useState(1)

    function increase() {
        setCounter(counter + 1)
    }    
    
        return(
            <div>
                <Boom number={counter}/>
                <button onClick={increase}>+</button>
            </div>)
}

export default Form;
