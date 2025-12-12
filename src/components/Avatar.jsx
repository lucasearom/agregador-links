import styles from "./Avatar.module.css";

export function Avatar({ src }) {
    return (
        <div className={styles.container}>
            <span>
                <img className={styles.avatar} src={src} alt="Foto de avatar"/>
            </span>
            <div className={styles.userContainer}>
                <p className={styles.name}>Lucas Moraes</p>
                <p className={styles.username}>@lucasearom</p>
            </div>
        </div>
    );
}