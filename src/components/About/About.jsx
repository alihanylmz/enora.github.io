import React from "react";

import styles from "./About.module.css";
import abouts from "../../data/about.json";
import { getImageUrl } from "../../utils";



export const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.ab}>
        {abouts.map((about, id) => (
          <div key={id} className={styles.aboutContainer}>
            <div className={styles.linestyling}>
              <div className={styles.stylecircle}></div>
              <div className={styles.stylecircle2}></div>
              <div className={styles.stylecircle2}></div>
              <div className={styles.stylecircle2}></div>
              <div className={styles.stylecircle2}></div>
              <div className={styles.stylecircle2}></div>
              <div className={styles.stylecircle2}></div>
              <div className={styles.styleline}></div>
            </div>
            <div className={styles.aboutbody}>
              <div className={styles.aboutdescription}>
                <h2>{about.title}</h2>
                <p>{about.description1}<br /><br />{about.description2}</p>
                <p>{about.description3}<br /><br />{about.description4}</p>
              </div>
              <img src={getImageUrl(about.imageSrc)} alt={about.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
  