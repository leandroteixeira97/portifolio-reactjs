// React
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Styles
import styles from "./BackToTop.module.css";

const BackToTop = () => {

  return (
    <div className={styles.back_to_top} id="back-to-top">
      <a href="#"><i className='bx bx-chevron-up bx-lg'></i></a>
    </div>
  );
};

export default BackToTop;