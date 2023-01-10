import React from "react";
import styles from "./ActiveQuiz.module.css";


const ActiveQuiz = (props) => (
    <div className={styles.ActiveQuiz}>
        <p>2. How are you?</p>
        <ul>
            <li>finy</li>
            <li>wrong</li>
            <li>best</li>
            <li>bad</li>
        </ul>
    </div>
);

export default ActiveQuiz;
