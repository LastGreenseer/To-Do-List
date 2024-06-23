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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddToList();
    }
  };

  // The `filter` method is used to exclude the item with the specified 'id' from the list
  const handleDeleteToDo = (id) => {
    const updatedToDo = toDo.filter((todo) => todo.id !== id); //Updates the `state` with the filtered array
    setToDo(updatedToDo);
  };

  const handleToggleDone = (id) => {
    const updatedToDo = toDo.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setToDo(updatedToDo);
  };

  const completedTasks = toDo.filter((todo) => todo.done);
  const remainingTasks = toDo.filter((todo) => !todo.done);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="toDoInput">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddToList();
            }
          }}
          placeholder="To do..."
        />
        <button onClick={handleAddToList}>Add to List</button>
      </div>

      <div className="listWrapper">
        <ul className="toDoList">
          {remainingTasks.map((todo) => (
            <li key={todo.id} className={`toDoItem ${todo.done ? "done" : ""}`}>
              <div className="stickyNote">
                <span className={todo.done ? "doneText" : ""}>{todo.text}</span>
                <div>
                  <button
                    className="doneButton"
                    onClick={() => handleToggleDone(todo.id)}
                  >
                    {todo.done ? "Undo" : "Done"}
                  </button>
                  <button
                    className="removeButton"
                    onClick={() => handleDeleteToDo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <h2>Completed Tasks:</h2>
      <div className="completedTasks">
        <ul className="completedList">
          {completedTasks.map((todo) => (
            <li key={todo.id} className={`completedItem`}>
              <div className="stickyNote">
                <span className="doneText">{todo.text}</span>
                <div>
                  <button
                    className="doneButton"
                    onClick={() => handleToggleDone(todo.id)}
                  >
                    Undo
                  </button>
                  <button
                    className="removeButton"
                    onClick={() => handleDeleteToDo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
