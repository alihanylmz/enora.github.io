import React from "react";
import { Link } from 'react-router-dom'


import styles from "./Project.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";



export const Projects = () => {
    const sprojects = projects.slice(0,3);
    return (
      <section className={styles.body}id="project">

  <h1>Projelerimiz</h1>
        <div className={styles.content}>
            {sprojects.map((project,id) =>{
                return (
                    <div key={id} className={styles.s} >
                             <div className={styles.image}>  
       <img
       src={getImageUrl(project.imageSrc)}
       alt={`${project.organisation} Logo`}
     />
     </div>
                        <div className={styles.s2}>
                             <h1>{project.title}</h1>

                             <div className={styles.hiddencontainer1}>
                                <h1>{project.project}</h1> </div>
                            <div className={styles.hiddencontainer2}>
                                <h1>{project.project}</h1>
                    
                    </div>
                    </div>
                    </div>
                );
            })}
        

</div>
                    <div className={styles.buttondiv}>
                                <Link to="/ss">
                                    <button className={styles.button}>
                                        View All
                                     <div className={styles.imgs}>   <img
        src={getImageUrl("project/right-arrow1.png")}
        alt="Hero image of me"
        className={styles.img}
      /></div>
                                    </button>
                                </Link>
                            </div>
      </section>
    );
  };