import { createSlice } from "@reduxjs/toolkit";
import { evaluate } from "mathjs";

const initialState = {
  placeholder: "0",
  calcExpression: "",
  calcResult: "",
};
const calculatorSlice = createSlice({
  name: "calculater",
  initialState,
  reducers: {
    handleInput: (state, action) => {
      const keypad = action.payload;
      // Validate number input
      if (keypad.match(/^\d+$/)) {
        const expression = state.calcExpression + keypad;
        if (!expression.startsWith("0")) {
          state.calcExpression = expression;
        }
      } else if (
        keypad === "+" ||
        keypad === "-" ||
        keypad === "*" ||
        keypad === "/"
      ) {
        // Handle operator input
        state.calcExpression += keypad;
      } else if (keypad === ".") {
        // Handle decimal point input
        const lastNumber = state.calcExpression.split(/[+\-*/]/).pop();
        if (!lastNumber.includes(".")) {
          state.calcExpression += keypad;
        }
      }
    },
    handleCalculate: (state) => {
      try {
        if (state.calcExpression.includes("*-+")) {
          state.calcExpression = state.calcExpression.replace(/\*-+/g, "+");
        }
        if (state.calcExpression.includes("*-")) {
          state.calcExpression = state.calcExpression.replace(/\*-/g, "*-");
        }
        state.calcResult = evaluate(state.calcExpression);
        console.log(state.calcResult);
        state.calcExpression = state.calcResult;
      } catch (error) {
        state.calcResult = "Invalid expression";
      }
    },
    handleClear: (state) => {
      state.calcExpression = "";
      state.calcResult = "";
    },
  },
});

export const { handleClick, handleInput, handleCalculate, handleClear } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
