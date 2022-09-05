import { useState } from 'react';
import './inputForm.css';

const InputForm = props => {

    const [task, setTask] = useState('');

    const onchangeHandler = event => {
        setTask(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();
        props.onSaveTask(task);
    };
    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap" rel="stylesheet"></link>
            <form className='formContainer' onSubmit={submitHandler}>
                <div className='noteTop'></div>
                <textarea type='text' value={task} onChange={onchangeHandler} maxLength='100'></textarea>
                <div className="button" onClick={submitHandler}>
                    <p className="btnText">Task</p>
                    <div className="btnTwo">
                        <p className="btnText2">Enter</p>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default InputForm;