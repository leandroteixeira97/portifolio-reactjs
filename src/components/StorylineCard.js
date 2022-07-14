// Styles
import styles from "./StorylineCard.module.css";

const StorylineCard = ({ job_index, job_title, job_image, job_period, job_description, job_company }) => {
  return (
    <div className={styles.storyline_card}>
      <div className={styles.story_image}>
        <img src={job_image} alt={job_company} />
      </div>
      <hr />
      <div className={styles.story_info}>
        <h2 className={styles.story_title}>{job_title}</h2>
        <h3 className={styles.story_company}>Empresa: {job_company}</h3>
        <p className={styles.story_year}>{job_period}</p>
        <p className={styles.story_description}>{job_description}</p>
      </div>
    </div>
  );
};

export default StorylineCard;