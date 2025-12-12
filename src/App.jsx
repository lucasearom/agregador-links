import { Button } from "./components/Button";
import { Avatar } from "./components/Avatar";

import { repositories } from "./data/data";

import styles from "./App.module.css";

// const repositories = [
//     {
//         id: 1,
//         name_repo: "Kanban Board",
//         url_repo: "https://lucasearom.github.io/kanban-board/",
//     },
// ];

export default function App() {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <div className={styles.container}>
            <Avatar
                src={"https://avatars.githubusercontent.com/u/124710780?v=4"}
            />
            {/* <Button
                url={"https://lucasearom.github.io/kanban-board/"}
                text={"Kanban Board"}
            /> */}
            {repositories.map((repo) => (
                <Button
                    key={repo.id}
                    url={repo.url_repo}
                    text={repo.name_repo}
                />
            ))}
            <footer className={styles.footer}>
                <p>© {currentYear} Feito por Lucas Moraes Silva</p>
            </footer>
        </div>
    );
}
