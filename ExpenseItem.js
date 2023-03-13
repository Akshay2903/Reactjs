import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated !!");
    console.log(title);
  }
  
  const [price, setPrice] = useState(props.amount);
  const priceHandler = () => {
    setPrice(100);
    console.log(price);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${price}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={priceHandler}>Change Price</button>
    </Card>
  );
}

export default ExpenseItem;