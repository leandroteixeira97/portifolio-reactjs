// Styles 
import styles from "./Footer.module.css";

// Others
import 'boxicons';

const Footer = () => {
  return (
    <footer>
      <div className={styles.social_media}>
        <h3>Siga-me em minhas redes sociais</h3>
        <div>
          <a href="https://www.linkedin.com/in/leandroteixeira97" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin-square bx-md bx-tada-hover"></i>
          </a>
          <a href="https://www.github.com/leandroteixeira97" target="_blank">
            <i className="bx bxl-github bx-md bx-tada-hover"></i>
          </a>
          <a href="https://www.instagram.com/leandroteixeira97" target="_blank">
            <i className="bx bxl-instagram bx-md bx-tada-hover"></i>
          </a>
          <a href="https://www.facebook.com/leandro.teixeira.sccp" target="_blank" >
            <i className='bx bxl-facebook-square bx-md bx-tada-hover'></i>
          </a>
        </div>
      </div>
      <div className={styles.rights_reserved}>
        <p>São José dos Campos, 2022</p>
        <p>Todos os direitos reservados &copy;</p>
      </div>
    </footer>
  );
};

export default Footer;