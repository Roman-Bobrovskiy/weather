import React from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import Card from "../components/Card/Card";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <header>
        <div className={styles.wrapHeader}>
          <SearchForm />
        </div>
      </header>
      <main>
        <div className={styles.wrapMain}>
          <Card />
        </div>
      </main>
      <footer>
        <div className={styles.wrapFooter}>
          <p className={styles.footerText}>Powered by React/Redux</p>
        </div>
      </footer>
    </>
  );
}
