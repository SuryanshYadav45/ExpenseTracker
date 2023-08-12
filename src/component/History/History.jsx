import React from "react";
import "./History.scss";
import { useDispatch, useSelector } from "react-redux";
import {del} from "../../store/slice/transactionSlice"
const History = () => {
  const dispatch=useDispatch();
  const transaction = useSelector((state) => state.transaction);
  console.log(transaction);
  return (
    <div className="history">
      <p>history</p>
      <hr />
      {transaction.map((items) => {
        return (
          <div key={items.id} className="card">
            <div className={items.amount < 0 ? "red" : "transaction"}>
              <span className="item">{items.item}</span>
              <p className="amount">₹{items.amount}</p>
            </div>
            <button className="removebtn" onClick={()=>dispatch(del({id:items.id}))}>x</button>
          </div>
        );
      })}
    </div>
  );
};

export default History;
