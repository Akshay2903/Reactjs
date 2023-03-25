import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const goalInputChangeHandler = event => {
    const inputText = event.target.value.trim();
    setEnteredValue(inputText);
    setIsInputEmpty(inputText.length === 0);
    setIsValid(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  const addButtonClasses = `add-goal-button ${isInputEmpty ? 'blurred' : ''}`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <Button type="submit" className={addButtonClasses}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
