import { useContext } from "react";
import { Context } from "../../utils/context";
import styles from "./Clear.module.scss";

export const Clear = () => {
  const { clearAll } = useContext(Context);
  
  return (
    <span onClick={clearAll} className={styles.clear}>
      Clear all
    </span>
  );
};
