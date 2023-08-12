import React from 'react'
import "./Balance.scss"
import { useSelector } from 'react-redux'
const Balance = () => {
  const income=useSelector((state)=>state.transaction);
  let totalincome = 0;
  let totalexpense = 0;
   income.forEach(item => {
    if(item.amount>0)
    {
      totalincome+=item.amount;
    }
    else if(item.amount<0)
    {
      totalexpense+=item.amount;
    }
   });
  return (
    <div className="balance">
        <div className='incomediv'>
                <span>Income</span>
                <p>₹{totalincome}</p>
        </div>
        <div className='horizontalline'></div>
        <div className='expensediv' >
                <span>Expense</span>
                <p>₹{Math.abs(totalexpense)}</p>
        </div>
    </div>
  )
}

export default Balance