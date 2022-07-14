// React Hooks
import { useState } from 'react';

// Components
import StorylineCard from "../../components/StorylineCard";

// Data
import { storylineData } from "../../data/storylineData";

// Styles
import styles from "./AboutMe.module.css";

const AboutMe = () => {

  const [data] = useState(storylineData);

  return (
    <div className={styles.about_me_content}>
      <div className={styles.storyline_header}>
        <h1>Minha trajetória na tecnologia</h1>
        <p>Conheça um pouco da minha trajetória profissional e sobre como eu entrei para a área da tecnologia. Como disse, sempre fui apaixonado por tecnologia, desde criança.</p>
        
      </div>
      <h2 className={styles.professional_historic_header}>Histórico profissional</h2>
      {
        data.map((job) => <StorylineCard
          key={job.job_index} 
          job_index={job.job_index} 
          job_title={job.job_title}
          job_image={job.job_image} 
          job_period={job.job_period} 
          job_description={job.job_description}
          job_company={job.job_company} ></StorylineCard>)
      }
    </div>
  );
};

export default AboutMe;