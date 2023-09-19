"use client";
import React, { useContext } from "react";
import styles from "./DarkModeToggle.module.css";
import { ThemeContex } from "../../context/ThemeContex";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContex);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
