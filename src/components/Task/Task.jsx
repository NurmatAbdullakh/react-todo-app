import { DeleteIcon, PenIcon } from "../../images/icons";
import styles from "./Task.module.css";

function Task({ text, isDone }) {
  const textClass = isDone ? ` ${styles.text} ${styles.done}` : styles.text;

  return (
    <li className={styles.item}>
      <span className={textClass}>{text}</span>
      <div className={styles.buttons}>
        <PenIcon />
        <DeleteIcon />
      </div>
    </li>
  );
}

export default Task;
