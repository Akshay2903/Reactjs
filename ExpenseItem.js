import './ExpenseItem.css';

function ExpenseItem() {

    const expenseDate = new Date(2023, 2, 23);
    const expenseTitle = 'Buying a Watch';
    const expenseAmount = 1000;
    const locationOfExpenditure = "Meerut";

    return (<div className="expense-item">
                <div>{expenseDate.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{expenseTitle}</h2>
                    <div className='expense-item__price'>Rs. {expenseAmount}</div>
                    <div className='expense-item__price'>{locationOfExpenditure}</div>
                </div>
            </div>
            
    )
}

export default ExpenseItem;