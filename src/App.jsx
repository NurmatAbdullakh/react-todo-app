import "./App.css";
import Task from "./components/Task/Task";
import { Title } from "./components/Title/Title";

function App() {
  const todoList = [
    {
      task: "Do homwork",
      isDone: false,
    },
    {
      task: "Read Book",
      isDone: true,
    },
    {
      task: "Play football",
      isDone: false,
    },
  ];

  const TaskElems = todoList.map((item, index, array) => {
    return <Task text={item.task} isDone={item.isDone} />;
  });

  return (
    <>
      <div class="wrapper">
        <Title />
        <div class="block">
          <div class="form">
            <input type="text" class="input" placeholder="Text input" />
            <button type="button" class="addButton">
              Add
            </button>
          </div>
          <ul class="tasks">{TaskElems}</ul>
          <span class="clear">Clear all</span>
        </div>
      </div>
    </>
  );
}

export default App;
