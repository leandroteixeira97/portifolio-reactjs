import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact_content}>
      <div className={styles.cover_bg_image}>
        <img src="https://images.unsplash.com/photo-1620287341401-e2945a4b9daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Foto de capa" />
      </div>
      <h1>Entre em contato</h1>
    </div>
  );
};

export default Contact;