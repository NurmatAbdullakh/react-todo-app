import React, { useContext } from "react";
import { Context } from "../../utils/context";
import Button from "../Button/Button";
import styles from "./Form.module.scss";

function Form() {
  const { value, setValue, handleSubmit } = useContext(Context);
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={styles.input}
        placeholder="Text input"
      />
      <Button type="all">Add</Button>
    </form>
  );
}

export default Form;
