import { useContext } from "react";
import { DeleteIcon, PenIcon } from "../../images/icons";
import { Context } from "../../utils/context";
import styles from "./Task.module.css";

function Task({ text, isDone }) {
  const { changeStatus, deleteByTask } = useContext(Context);
  const textClass = isDone ? ` ${styles.text} ${styles.done}` : styles.text;

  return (
    <li className={styles.item}>
      <span className={textClass}>{text}</span>
      <div className={styles.buttons}>
        <div onClick={() => changeStatus(text)}>
          <PenIcon />
        </div>
        <div onClick={() => deleteByTask(text)}>
          <DeleteIcon />
        </div>
      </div>
    </li>
  );
}

export default Task;
