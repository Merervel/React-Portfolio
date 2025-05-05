import React from "react";
import styles from "./Toggle.module.css";
import { getImageUrl } from "../../util";

export const Toggle = () => {
  const SetWhiteMode = () => {
    document.querySelector("body").setAttribute("data-theme", "white");
  };
  const SetDarkMode = () => {
    document.querySelector("body").removeAttribute("data-theme");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) SetWhiteMode();
    else SetDarkMode();
  };

  return (
    <div className={styles.whiteMode}>
      <input
        className={styles.WhiteModeInput}
        type="checkbox"
        id="whitemode-toggle"
        onChange={toggleTheme}
      />
      <label className={styles.whiteModeLabel} htmlFor="whitemode-toggle">
        <img
          src={getImageUrl("toggle/Sun.svg")}
          alt="Sun"
          className={styles.sun}
        />
        <img
          src={getImageUrl("toggle/Moon.svg")}
          alt="Moon"
          className={styles.moon}
        />
      </label>
    </div>
  );
};
