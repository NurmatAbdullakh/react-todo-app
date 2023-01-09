import { memo } from "react";
import styles from "./Button.module.scss";

const Button = ({ children, handleClick, type }) => {
  const buttonClass = `${styles.addButton} ${styles[type]}`;

  return (
    <button onClick={handleClick} type="submit" className={buttonClass}>
      {children}
    </button>
  );
};

export default memo(Button);
