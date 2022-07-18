// Styles
import styles from "./ProjectCard.module.css";

const ProjectCard = ({name, description, url, image}) => {
  return (
    <div className={styles.project_card}>
      <div className={styles.project_image}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.project_info}>
        <h4>{name}</h4>
        <p className={styles.project_description}>{description}</p>
        <a href={url} target="_blank" className="btn-dark" rel="noreferrer" >Saiba mais</a>
      </div>
    </div>
  )
}

export default ProjectCard