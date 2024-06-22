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

  const handleAddToList = () => {
    if (inputValue.trim() !== "") {
      // Updates `toDo` using `setToDo` with the new array that includes the new object
      setToDo([...toDo, { id: Date.now(), text: inputValue }]); //Date.now ensure each new item has a unigue id
      setInputValue(""); // Clears `inputValue` by making it an empty string
    }
  };

  // The `filter` method is used to create a new array `updatedToDo` that excludes the item with the specified `id`
  const handleDeleteToDo = (id) => {
    const updatedToDo = toDo.filter((todo) => todo.id !== id);
    setToDo(updatedToDo);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="toDoInput">
        <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="To do..."
        />
        <button onClick={handleAddToList}>Add to List</button>
      </div>

      <div className="listWrapper">
      <ul className="toDoList">
        {toDo.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button className="removeButton" onClick={()=> handleDeleteToDo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default App;
