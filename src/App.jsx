import data from "./data";
import Keypad from "./components/Keypad";
import { useSelector, useDispatch } from "react-redux";
import { evaluate } from "mathjs";
import {
  handleCalculate,
  handleClear,
} from "./features/calculator/calculatorSlice";
function App() {
  const dispatch = useDispatch();
  const { calcExpression, calcResult } = useSelector(
    (state) => state.calculator
  );
  return (
    <>
      <div className="calculator">
        <div className="calculator__screen" id="screen">
          <p className="input" id="display">
            {calcExpression ? calcExpression : "0"}
          </p>
          <p className="result">{calcResult ? calcResult : "0"}</p>
        </div>
        <div className="calculator__keypad">
          {data.map((item) => {
            return <Keypad key={item.id} {...item} />;
          })}
          <button
            onClick={() => {
              dispatch(handleCalculate());
            }}
            id="equals"
            className="calculator__key calculator__key--equal"
          >
            =
          </button>
          <button
            onClick={() => dispatch(handleClear())}
            id="clear"
            className="calculator__key calculator__key--clear"
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
