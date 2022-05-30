import React, { useState } from "react";
import style from "./Details.module.css";
import { FaCaretRight } from "react-icons/fa";

function Details() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className={style.details__container} onClick={handleClick}>
      <h3>Details</h3>
      <FaCaretRight
        className={show ? style.details__btn__rotate : style.details__btn}
      />
    </div>
  );
}

export default Details;
