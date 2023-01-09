import { DeleteIcon, PenIcon } from "../../images/icons";
import styles from "./Task.module.css";

function Task({ text, isDone, handleDelete, handleDone }) {
  const textClass = isDone ? ` ${styles.text} ${styles.done}` : styles.text;

  return (
    <li className={styles.item}>
      <span className={textClass}>{text}</span>
      <div className={styles.buttons}>
        <div onClick={() => handleDone(text)}>
          <PenIcon />
        </div>
        <div onClick={() => handleDelete(text)}>
          <DeleteIcon />
        </div>
      </div>
    </li>
  );
}

export default Task;
