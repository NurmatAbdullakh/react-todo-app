import { DeleteIcon, PenIcon } from "../../images/icons";
import "./Task.css";

function Task({ text, isDone }) {
  const textClass = isDone ? "text done" : "text";

  return (
    <li class="item">
      <span class={textClass}>{text}</span>
      <div class="buttons">
        <DeleteIcon />
        <PenIcon />
      </div>
    </li>
  );
}

export default Task;
