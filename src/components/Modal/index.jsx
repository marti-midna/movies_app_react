import styles from './styles.module.scss';

export function Modal({text, isVisible}) {

    return(
        <>
        {isVisible  &&
            <div className={styles.Modal}>{text}</div>
        }
        </>
    )
}