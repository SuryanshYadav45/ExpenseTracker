import React from 'react';
import "./Header.scss"
import { useSelector } from 'react-redux';

const Header = () => {
  const amount=useSelector((state)=>state.transaction);
  let total=0
  amount.forEach(element => {
    total+=element.amount;
  });

  console.log(total);
  return (
    <div className='header'>
        <h2>Expense Tracker</h2>
        <div className='headersubdiv'>
            <p>Your balance</p>
            <h6>₹{total}</h6>
        </div>
    </div>
  )
}

export default Header