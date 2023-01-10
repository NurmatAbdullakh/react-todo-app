import { useContext } from "react";
import { Context } from "../../utils/context";
import Button from "../Button/Button";
import styles from "./ButtonGroup.module.scss";

export const ButtonGroup = () => {
  const { setType, statusButtons } = useContext(Context);
  console.log("salom");
  return (
    <div className={styles.group}>
      {statusButtons.map((v) => {
        return (
          <Button type={v.type} handleClick={() => setType(v.type)}>
            {v.title}:{v.count}
          </Button>
        );
      })}
    </div>
  );
};
