import React from "react";
import styles from "./LoadingScreen.module.css";

function Loading() {
  return (
    <div className={styles.spinner}>
      <span>Loading...</span>
      <div className={styles.halfSpinner}></div>
    </div>
  );
}

export default Loading;

/**
 * Lifted from https://dev.to/codebucks/create-3-different-types-of-loading-screens-in-react-part-3-2o51
 */
