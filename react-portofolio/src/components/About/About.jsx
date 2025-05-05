import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from '../../util'

export const About = () => {
  return (
 <section className={styles.container} id="about">
    <div className={styles.title}>
        <h2>About</h2>
    </div>
    <div className={styles.content}>
    <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="About Image" />
<ul className={styles.aboutItems}>
    <li className={styles.aboutItem}>
        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
        <div className={styles.aboutItemText}>
            <h3>FrontEnd Developer</h3>
            <p>Experienced in front-end development using HTML and CSS. Currently learning JavaScript to build more interactive and dynamic web pages.</p>
        </div>
</li>

<li className={styles.aboutItem}>
    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
    <div className={styles.aboutItemText}>
        <h3>Back End Developer</h3>
        <p> Learning back-end development with Laravel and SQL, focusing on building dynamic websites and managing data efficiently.</p>
    </div>
</li>
<li className={styles.aboutItem}>
    <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
    <div className={styles.aboutItemText}>
        <h3>UI/UX Designer</h3>
        <p>Designed a simple and user-friendly UI for a lending system using Figma, focusing on clear item borrowing and return flows.</p>
    </div>
</li>
</ul>
</div>
 </section>
  )
}
