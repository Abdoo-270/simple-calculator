import shortid from "shortid";
const data = [
  {
    id: shortid.generate(),
    keypad: "7",
    className: "calculator__key",
    idName: "seven",
  },
  {
    id: shortid.generate(),
    keypad: "8",
    className: "calculator__key",
    idName: "eight",
  },
  {
    id: shortid.generate(),
    keypad: "9",
    className: "calculator__key",
    idName: "nine",
  },
  {
    id: shortid.generate(),
    keypad: "4",
    className: "calculator__key",
    idName: "four",
  },
  {
    id: shortid.generate(),
    keypad: "5",
    className: "calculator__key",
    idName: "five",
  },
  {
    id: shortid.generate(),
    keypad: "6",
    className: "calculator__key",
    idName: "six",
  },
  {
    id: shortid.generate(),
    keypad: "1",
    className: "calculator__key",
    idName: "one",
  },
  {
    id: shortid.generate(),
    keypad: "2",
    className: "calculator__key",
    idName: "two",
  },
  {
    id: shortid.generate(),
    keypad: "3",
    className: "calculator__key",
    idName: "three",
  },
  {
    id: shortid.generate(),
    keypad: "+",
    className: "calculator__key calculator__key--operator",
    idName: "add",
  },
  {
    id: shortid.generate(),
    keypad: "-",
    className: "calculator__key calculator__key--operator",
    idName: "subtract",
  },
  {
    id: shortid.generate(),
    keypad: "*",
    className: "calculator__key calculator__key--operator",
    idName: "multiply",
  },
  {
    id: shortid.generate(),
    keypad: "/",
    className: "calculator__key calculator__key--operator",
    idName: "divide",
  },
  {
    id: shortid.generate(),
    keypad: "0",
    className: "calculator__key",
    idName: "zero",
  },
  {
    id: shortid.generate(),
    keypad: ".",
    className: "calculator__key",
    idName: "decimal",
  },
];

export default data;
