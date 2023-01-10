import styles from "./Block.module.scss";

export const Block = ({ children }) => {
  return <div className={styles.block}>{children}</div>;
};
