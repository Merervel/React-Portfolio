import React from "react";
import { getImageUrl } from "../../util";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
   <footer className={styles.container}>
    <div className={styles.text}>
        <h2 >Contact</h2>
        <p>Feel Free To Reach Out</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="" />
            <a href="mailto:wijayamarvel3@gmail.com">wijayamarvel3@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="" />
            <a href="https://github.com/Merervel">Github/Merervel</a>
        </li>
    </ul>
   </footer>
  )
}
