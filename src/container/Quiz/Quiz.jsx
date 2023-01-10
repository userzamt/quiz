import React from "react";
import styles from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";


export default class Quiz extends React.Component {
    state = {
        quiz: []
    };

    render() {
        return (
            <div className={styles.Quiz}>
                <h1>Welcome to Quiz</h1>
                <ActiveQuiz />
            </div>
        );
    }
};
