import styles from "./styles.module.scss";
import { useEffect } from "react";

export const Alert = ({ alert, hideCallback }) => {
  const visible = alert.visible || false;
  const content = alert.content || "";

  useEffect(() => {
    if (visible === true) {
      console.log("alert visibile");
      setTimeout(() => hideCallback(), 3000);
    }
  }, [visible]);

  //classe alert sempre presente, se props visible è true aggiungimi la classe visible altrimenti stringa vuota
  const classes = [styles.alert, visible ? styles.visible : ""];

  return <div className={classes.join(" ")}>{content}</div>;
};
