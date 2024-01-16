import React from "react";

import styles from "./SingleServices.module.css";
import services from "../../data/servicesData.json";
import { getImageUrl } from "../../utils";



export const SingleServices = () => {
    return (
      <section className={styles.body}id="singleservice">

  <h1>Hizmetlerimiz</h1>
        <div className={styles.content}>
            {services.map((service,id) =>{
                return (
                    <div key={id} className={styles.s} >
                        <div className={styles.s2}>
                        <img
                  src={getImageUrl(service.imageSrc)}
                  alt={`${service.organisation} Logo`}
                />
                    <h1>{service.title}</h1>
                    
                    </div>
                    </div>
                );
            })}
        

</div>

      </section>
    );
  };