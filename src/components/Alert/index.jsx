import styles from './styles.module.scss';


export const Alert = (props) => {
    const visible = props.visible || false;
    const content = props.content || "";

    //classe alert sempre presente, se props visible è true aggiungimi la classe visible altrimenti stringa vuota
    const classes = [styles.alert, visible ? styles.visible : ""];

  return (
    <div className={classes.join(" ")}>{content}</div>
  )
}