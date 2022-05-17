import styles from "./styles.module.scss";

export const Loading = () => {
  return (
    <div className={styles.all}>
      <div className={styles.ldsellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
