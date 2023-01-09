import { useMemo, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Task from "./components/Task/Task";
import Title from "./components/Title/Title";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [type, setType] = useState("all");
  const [value, setValue] = useState("");

  const addNewTaskToList = (newTask) => {
    setTodoList((prev) => {
      return [{ task: newTask, isDone: false }, ...prev];
    });
  };
  const dateFormatter = (d) => {
    console.log("formatter is working");
    return d.getDate() + "-" + d.getMonth() + 1 + "-" + d.getFullYear();
  };

  const today = useMemo(
    () => dateFormatter(new Date()),
    [new Date().getDate()]
  );

  const clearAll = () => {
    setTodoList([]);
  };
  const changeStatus = (task) => {
    setTodoList(
      todoList.map((v) => (v.task === task ? { ...v, isDone: !v.isDone } : v))
    );
  };
  const deleteByTask = (task) => {
    setTodoList(todoList.filter((el) => el.task !== task));
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
    if (isHasTaskInList(value)) {
      alert("already has exist task");
    } else if (!value) {
      alert("Please enter anything to field");
    } else {
      addNewTaskToList(value);
      setValue("");
    }
  };
  const filteredListByType = todoList.filter((el) => {
    if (type === "all") {
      return true;
    } else if (type === "completed") {
      return el.isDone;
    } else if (type === "processing") {
      return !el.isDone;
    }
  });

  const TaskElems = useMemo(
    () =>
      filteredListByType.map((item) => {
        return (
          <Task
            handleDelete={deleteByTask}
            handleDone={changeStatus}
            text={item.task}
            isDone={item.isDone}
          />
        );
      }),
    [todoList, type]
  );

  return (
    <div className="wrapper">
      <Title>To Do list APP</Title>
      <div className="block">
        <div>date : {today}</div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="input"
            placeholder="Text input"
          />
          <Button type="all">Add</Button>
        </form>
        <ul className="tasks">{TaskElems}</ul>
        <span onClick={clearAll} className="clear">
          Clear all
        </span>
        <div className="typesBtn">
          <Button type="all" handleClick={() => setType("all")}>
            All:{todoList.length}
          </Button>
          <Button type="completed" handleClick={() => setType("completed")}>
            Completed:{todoList.filter((v) => v.isDone).length}
          </Button>
          <Button type="processing" handleClick={() => setType("processing")}>
            Processing:{todoList.filter((v) => !v.isDone).length}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
