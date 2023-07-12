import { createSlice } from "@reduxjs/toolkit";
import { evaluate } from "mathjs";

const initialState = {
  result: 0,
  calcExpression: "",
  calcResult: "",
};
const calculatorSlice = createSlice({
  name: "calculater",
  initialState,
  reducers: {
    handleInput: (state, action) => {
      const keypad = action.payload;
      if (keypad != "Clear" && keypad != "=") {
        state.calcExpression = state.calcExpression + keypad;
      }
    },
    handleCalculate: (state) => {
      try {
        state.calcResult = evaluate(state.calcExpression);
        console.log(state.calcResult);
        state.calcExpression = state.calcResult;
      } catch (error) {
        state.calcResult = "Invalid expression";
      }
    },
    handleClear: (state) => {
      state.calcExpression = 0;
      state.calcResult = 0;
    },
  },
});

export const { handleClick, handleInput, handleCalculate, handleClear } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
