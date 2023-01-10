import React from "react";
import styles from "./Layout.module.css";

export default class Layout extends React.Component {
    render() {
        return (
            <div className={styles.Layout}>
                <header>Fish text</header>

                <main className={styles.main}>
                    {this.props.children}
                </main>

                <footer>down</footer>
            </div>
        );
    }
};
