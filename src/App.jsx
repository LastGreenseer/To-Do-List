import { useState } from "react";
import "./App.css";

const App = () => {
  //This array holds todo items.
  // `useState` inititializes it with an empty string
  const [toDo, setToDo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // This function updates `inputValue` when the input field changes.
  // `e.target.value` is used to get the current value from the input field
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const HandleAddToList = () => {
    if (inputValue.trim() !== "") { // Ensures the input is not empty or just whitespace
      // Updates `toDo` using `setToDo` with the new array that includes the new object
      setToDo([...toDo, { id: toDo.length + 1, text: inputValue }]); 
      setInputValue(""); // Clears `inputValue` by making it an empty string
    }
  };

  return <h1>To Do List</h1>;
};

export default App;
