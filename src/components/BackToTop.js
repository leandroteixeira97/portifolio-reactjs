// Styles
import styles from "./BackToTop.module.css";

const BackToTop = () => {

  return (
    <div className={styles.back_to_top} id="back-to-top">
      <i className='bx bx-chevron-up bx-lg' onClick={() => document.documentElement.scrollTop = 0}></i>
    </div>
  );
};

export default BackToTop;