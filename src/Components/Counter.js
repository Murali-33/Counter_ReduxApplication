// import React, { useState } from 'react'; 
import { useState } from 'react';
import { increment,decrement,reset,incrementByAmount } from '../Feactures/counterSlice';
import { useDispatch, useSelector } from 'react-redux';


function Counter() {
  const dispatch =useDispatch()
  const count = useSelector((state)=>state.counter.count);
  const [incrAmount,setIncrAmount] = useState(0);
  const addValue = Number(incrAmount) ||0;

  const resetAll =()=>{
       dispatch(reset());
       setIncrAmount(0);

  }
  return (
<div className="p-4 bg-gray-200">
  <h1 className="text-3xl font-bold mb-4">{count}</h1>
  <input
    type="text"
    className="border p-2 mb-4 mr-2"
    value={incrAmount}
    onChange={(e) => setIncrAmount(e.target.value)}
  />
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
    onClick={(e) => dispatch(incrementByAmount(addValue))}
  >
    Add Value
  </button>
  <button
    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded"
    onClick={(e) => dispatch(increment())}
  >
    Increment
  </button>
  <button
    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded"
    onClick={(e) => dispatch(decrement())}
  >
    Decrement
  </button>
  <button
    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-2 mb-2 rounded"
    onClick={(e) => dispatch(reset())}
  >
    Reset
  </button>
  <button
    className="bg-yellow-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2 mr-2"
    onClick={resetAll}
  >
    Reset All
  </button>
</div>


  )
}

export default Counter
