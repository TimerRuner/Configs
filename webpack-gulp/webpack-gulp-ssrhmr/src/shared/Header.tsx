import { hot } from "react-hot-loader/root"
import * as React from "react"
import styles from "./header.css"

function HeaderComponent() {
    return (
        <header>
            <h1 className={styles.example}>Hello new Config</h1>
            <img
                style={{ width: "420px", height: "300px" }}
                src="/dist/img/cover.webp"
            />
        </header>
    )
}

export const Header = hot(HeaderComponent)
