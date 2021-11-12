import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.wrapFooter}>
        <p className={styles.footerText}>Powered by React/Redux</p>
      </div>
    </footer>
  );
}
