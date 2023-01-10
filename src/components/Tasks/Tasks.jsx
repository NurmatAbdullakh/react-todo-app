import React, { useContext, useMemo } from "react";
import { Context } from "../../utils/context";
import Task from "../Task/Task";
import styles from "./Tasks.module.scss";

function Tasks() {
  const { filteredListByType, todoList, type } = useContext(Context);

  const TaskElems = useMemo(
    () =>
      filteredListByType.map((item) => {
        return <Task text={item.task} isDone={item.isDone} />;
      }),
    [todoList, type]
  );
  return <ul className={styles.tasks}>{TaskElems}</ul>;
}

export default Tasks;
