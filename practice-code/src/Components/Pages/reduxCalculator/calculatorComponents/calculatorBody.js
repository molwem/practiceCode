// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  clear,
  getCount,
  addition,
  subtract,
  multiply,
  divide,
  equal,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  zero,
} from "./bodySlice";

export function Counter() {
  // const [counter] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  return (
    <div>
      <span>{count}</span>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button aria-label="Clear value"
        onClick={() => dispatch(clear())}>
          Clear
        </button>
      </div>
      <div>
        <button aria-label="number seven"
        onClick={() => dispatch(seven())}>
          7
        </button>
        <button aria-label="number eight"
        onClick={() => dispatch(eight())}>
          8
        </button>
        <button aria-label="number nine"
        onClick={() => dispatch(nine())}>
          9
        </button>
      </div>
      <div>
        <button aria-label="number four"
        onClick={() => dispatch(four())}>
          4
        </button>
        <button aria-label="number five"
        onClick={() => dispatch(five())}>
          5
        </button>
        <button aria-label="number six"
        onClick={() => dispatch(six())}>
          6
        </button>
      </div>
      <div>
        <button aria-label="number one"
        onClick={() => dispatch(one())}>
          1
        </button>
        <button aria-label="number two"
        onClick={() => dispatch(two())}>
          2
        </button>
        <button aria-label="number three"
        onClick={() => dispatch(three())}>
          3
        </button>
      </div>
      <div>
        <button aria-label="zero"
        onClick={() => dispatch(zero())}>
          0
        </button>
      </div>
      <div>
        <button aria-label="plus sign"
        onClick={() => dispatch(addition())}>
          +
        </button>
        <button aria-label="subtract sign"
        onClick={() => dispatch(subtract())}>
          -
        </button>
        <button aria-label="multiply sign"
        onClick={() => dispatch(multiply())}>
          x
        </button>
        <button aria-label="divide sign"
        onClick={() => dispatch(divide())}>
          /
        </button>
        <button aria-label="equal sign"
        onClick={() => dispatch(equal())}>
          =
        </button>
      </div>
    </div>
  );
}
