import React from "react"
import styles from "./loader.css"

export function Loader() {
    return (
        <div className={styles.layout}>
            <div className={styles.lds_ring}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
