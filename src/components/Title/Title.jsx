import { memo } from "react";
import styles from "./Title.module.css";

const Title = ({ children }) => {
  console.log("title is rendering");
  return <div className={styles.text}>{children}</div>;
};


export default memo(Title)
