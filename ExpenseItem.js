import './ExpenseItem.css';

function ExpenseItem(props) {

    const expenseDate = new Date(2023, 2, 23);
    const expenseTitle = 'Buying a Watch';
    const expenseAmount = 1000;
    const locationOfExpenditure = "Meerut";

    return (<div className="expense-item">
                <div>{props.date.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>Rs. {props.amount}</div>
                    <h2>{props.place}</h2>
                </div>
            </div>
            
    )
}

export default ExpenseItem;