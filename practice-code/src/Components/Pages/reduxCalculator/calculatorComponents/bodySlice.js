import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    clear: (state) => {
      state.value = 0;
    },
    one: (state) => {
      state.value += "1";
    },
    two: (state) => {
      state.value += "2";
    },
    three: (state) => {
      state.value += "3";
    },
    four: (state) => {
      state.value += "4";
    },
    five: (state) => {
      state.value += "5";
    },
    six: (state) => {
      state.value += "6";
    },
    seven: (state) => {
      state.value += "7";
    },
    eight: (state) => {
      state.value += "8";
    },
    nine: (state) => {
      state.value += "9";
    },
    zero: (state) => {
      state.value += "0";
    },
    addition: (state) => {
      state.value += "+";
    },
    subtract: (state) => {
      state.value += "-";
    },
    multiply: (state) => {
      state.value += "x";
    },
    divide: (state) => {
      state.value += "/";
    },
    equal: (state) => {
      state.value += "=";
    },
  },
});

export const { 
  increment, 
  decrement, 
  clear, 
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
  addition,
  subtract,
  multiply,
  divide,
  equal,
 } = counterSlice.actions;

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getCount = (state) => state.counter.value;

export default counterSlice.reducer;
