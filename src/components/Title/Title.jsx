import styles from "./Title.module.css";

export const Title = ({ children }) => {
  return <div className={styles.text}>{children}</div>;
};
