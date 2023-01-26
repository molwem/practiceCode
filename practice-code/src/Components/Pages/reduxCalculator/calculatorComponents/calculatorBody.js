import { useState } from "react";
import { useDispatch } from 'react-redux';
import { increment, decrement, clear } from "./bodySlice"

export function Counter() {
    const [counter] = useState(0);
    const dispatch = useDispatch();
  
    // const increment = () => {
    //     const increaseCounterValue = counter + 1;
    //     setCounter(increaseCounterValue)
    // }

    // const decrement = () => {
    //     const decreaseCounterValue = counter - 1;
    //     setCounter(decreaseCounterValue)
    // }

    // const clear =() => {
    //     setCounter(0)
    // }
  
    return (
        <div>
          <div>
          <span>{counter}</span>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button
              aria-label="Clear value"
              onClick={() => dispatch(clear())}
            >
              Clear
            </button>
          </div>
        </div>
      )
    }