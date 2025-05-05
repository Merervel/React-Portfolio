import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from '../../util';

export const Hero1 = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Marvel</h1>
      <p className={styles.description}>
        I'm a Front-End Developer at Wira Harapan, currently joining Avatar Solution to gain more experience.
      </p>
      <a  href="mailto:wijayamarvel3@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image" className={styles.heroImg} />

    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />

   </section>
  );
};

