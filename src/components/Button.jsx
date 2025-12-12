import styles from "./Button.module.css";
import { ButtonLink } from "./ButtonLink";

export function Button({ text, url }) {
    return (
        <button className={styles.button}>
            <a target="_blank" className={styles.link} href={url}>
                {text}
            </a>
        </button>
    );
}
