import { useState } from "react";
import "./App.css";
import Task from "./components/Task/Task";
import { Title } from "./components/Title/Title";

function App() {
  const [todoList, setTodoList] = useState([]);

  const TaskElems = todoList.map((item) => {
    return <Task text={item.task} isDone={item.isDone} />;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements["task"].value);
    setTodoList((prev) => {
      return [
        { task: event.target.elements["task"].value, isDone: false },
        ...prev,
      ];
    });
  };

  return (
    <div className="wrapper">
      <Title>To Do list APP</Title>
      <div className="block">
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            className="input"
            placeholder="Text input"
          />
          <button type="submit" className="addButton">
            Add
          </button>
        </form>
        <ul className="tasks">{TaskElems}</ul>
        <span className="clear">Clear all</span>
      </div>
    </div>
  );
}

export default App;
