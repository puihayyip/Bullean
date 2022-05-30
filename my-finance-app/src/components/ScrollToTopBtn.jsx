import React, { useState, useEffect } from "react";
import styles from "./ScrollToTopBtn.module.css";
import { FaArrowAltCircleUp } from "react-icons/fa";

function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    console.log(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <FaArrowAltCircleUp
      className={styles.scrollBtn}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    />
  );
}

export default ScrollToTopBtn;
