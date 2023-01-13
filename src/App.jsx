import { createContext, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Block } from "./components/Block/Block";
import Button from "./components/Button/Button";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
import { Clear } from "./components/Clear/Clear";
import Form from "./components/Form/Form";
import Task from "./components/Task/Task";
import Tasks from "./components/Tasks/Tasks";
import Title from "./components/Title/Title";
import { addItemActionCreator, changeStatusActionCreator, clearAllActionCreator, deleteItemActionCreator } from "./redux/todoReducer";
import { Context } from "./utils/context";

function App() {
  const todos = useSelector(state => state.todo.list)
  const dispatch = useDispatch()
  const [type, setType] = useState("all");
  const [value, setValue] = useState("");
  const statusButtons = [
    {
      type: "all",
      title: "All",
      count: todos.length,
    },
    {
      type: "completed",
      title: "Completed",
      count: todos.filter((v) => v.isDone).length,
    },
    {
      type: "processing",
      title: "Processing",
      count: todos.filter((v) => !v.isDone).length,
    },
  ];
  // ===========================TODO LIST ACTIONS==============
  const clearAll = () => {
    dispatch(clearAllActionCreator())
  };
  const changeStatus = (task) => {
    dispatch(changeStatusActionCreator(task))
  };
  const deleteByTask = (task) => {
    dispatch(deleteItemActionCreator(task))
  };
  // =========================== UTILS ==============
  const formatTaskForValidate = (task) =>
    task.replaceAll(" ", "").toLowerCase();

  const isHasTaskInList = (newTask) => {
    return todos.find(
      (v) => formatTaskForValidate(v.task) === formatTaskForValidate(newTask)
    );
  };
  const dateFormatter = (d) => {
    console.log("formatter is working");
    return d.getDate() + "-" + d.getMonth() + 1 + "-" + d.getFullYear();
  };
  const today = useMemo(
    () => dateFormatter(new Date()),
    [new Date().getDate()]
  );

  // =========================== SUBMIT ==============
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isHasTaskInList(value)) {
      alert("already has exist task");
    } else if (!value) {
      alert("Please enter anything to field");
    } else {
      dispatch(addItemActionCreator(value))
      setValue("");
    }
  };
  // =========================== filteredListByType ==============
  const filteredListByType = todos.filter((el) => {
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
    todos,
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
          {/* Clear */}
          <Clear />
          {/* Tasks */}
          <Tasks />
          <ButtonGroup />
        </Block>
      </div>
    </Context.Provider>
  );
}

export default App;
