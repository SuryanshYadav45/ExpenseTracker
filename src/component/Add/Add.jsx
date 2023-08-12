import React,{useState} from 'react';
import "./Add.scss";
import { useDispatch} from 'react-redux';
import { add } from '../../store/slice/transactionSlice';


const Add = () => {
    const dispatch=useDispatch();
    const [id, setid] = useState(0); // Initialize id state
    const [item, setitem] = useState("");
    const [amount, setamount] = useState("");

    const handlesubmit=(e)=>
    {
        e.preventDefault();

        dispatch(add({ item, amount: parseFloat(amount),id }));
        setid(id+1)
        setitem("");
        setamount("");
    }
    
  return (
    <div className='addtransaction'>
        <p>Add new transaction</p>
        <hr />
        <form >
            <label htmlFor="item">Text</label>
            <br />
            <input type="text"  id="item" value={item} onChange={(e)=>setitem(e.target.value)}  autoComplete='off'/>
            <br />
            <label htmlFor="item">Amount <br /> <span>(negative - expense, positive - income)</span></label>
            <br />
            <input type="number"  id="item" value={amount} onChange={(e)=>setamount(e.target.value)} autoComplete='off'/>
            <button onClick={handlesubmit}>Add To Transaction</button>
        </form>
    </div>
  )
}

export default Add