import { useState } from "react";
import "./App.css";
import Task from "./components/Task/Task";
import { Title } from "./components/Title/Title";

function App() {
  const [todoList, setTodoList] = useState([]);

  const TaskElems = todoList.map((item) => {
    return <Task text={item.task} isDone={item.isDone} />;
  });
  const addNewTaskToList = (newTask) => {
    setTodoList((prev) => {
      return [{ task: newTask, isDone: false }, ...prev];
    });
  };

  const formatTaskForValidate = (task) =>
    task.replaceAll(" ", "").toLowerCase();

  const isHasTaskInList = (newTask) => {
    return todoList.find(
      (v) => formatTaskForValidate(v.task) === formatTaskForValidate(newTask)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = event.target.elements["task"].value;

    if (isHasTaskInList(newTask)) {
      alert("already has exist task");
    } else if (!newTask) {
      alert("Please enter anything to field");
    } else {
      addNewTaskToList(newTask);
      event.target.elements["task"].value = "";
    }
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
