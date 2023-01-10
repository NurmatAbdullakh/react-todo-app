import { createContext, useMemo, useState } from "react";
import "./App.css";
import { Block } from "./components/Block/Block";
import Button from "./components/Button/Button";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
import { Clear } from "./components/Clear/Clear";
import Form from "./components/Form/Form";
import Task from "./components/Task/Task";
import Tasks from "./components/Tasks/Tasks";
import Title from "./components/Title/Title";
import { Context } from "./utils/context";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [type, setType] = useState("all");
  const [value, setValue] = useState("");
  const statusButtons = [
    {
      type: "all",
      title: "All",
      count: todoList.length,
    },
    {
      type: "completed",
      title: "Completed",
      count: todoList.filter((v) => v.isDone).length,
    },
    {
      type: "processing",
      title: "Processing",
      count: todoList.filter((v) => !v.isDone).length,
    },
  ];

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

  const state = {
    setType,
    statusButtons,
    clearAll,
    filteredListByType,
    deleteByTask,
    changeStatus,
    todoList,
    type,
    handleSubmit,
    value,
    setValue,
  };

  return (
    <Context.Provider value={state}>
      <div className="wrapper">
        <Title>To Do list APP</Title>
        <Block>
          {/* Date */}
          <div>date : {today}</div>
          {/* Form */}
          <Form />
          {/* Tasks */}
          <Tasks />
          {/* Clear */}
          <Clear />
          <ButtonGroup />
        </Block>
      </div>
    </Context.Provider>
  );
}

export default App;
