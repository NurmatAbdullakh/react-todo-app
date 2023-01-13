import React, { useContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { Context } from "../../utils/context";
import Task from "../Task/Task";
import styles from "./Tasks.module.scss";

function Tasks() {

  const { filteredListByType } = useContext(Context);

  const TaskElems =
    filteredListByType.map((item) => {
      return <Task text={item.task} isDone={item.isDone} />;
    })
  return <ul className={styles.tasks}>{TaskElems}</ul>;
}

export default Tasks;
