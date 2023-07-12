import { useState } from "react";
import { handleInput } from "../features/calculator/calculatorSlice";
import { useSelector, useDispatch } from "react-redux";
const Keypad = ({ id, className, idName, keypad }) => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(handleInput(keypad));
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 150);
  };
  return (
    <button
      id={idName}
      onClick={() => {
        handleClick();
      }}
      className={`${className} ${isClicked ? "clicked" : ""}`}
    >
      {keypad}
    </button>
  );
};
export default Keypad;
