import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Kurumsal Kimliğiniz, Bizim İmzamız..
</h1>
        <p className={styles.description}>
        
        </p>
        <a href="whatsapp:+905548891631" className={styles.contactBtn}>
          Bizimle İletişime Geç
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};