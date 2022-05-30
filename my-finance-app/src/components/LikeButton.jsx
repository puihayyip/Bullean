import React, { useState, useContext, useEffect } from "react";
import styles from "./LikeButton.module.css";
import { likedListContext } from "../App";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

function LikeButton({ ticker }) {
  const [like, setLike] = useState(true);
  const [check, setCheck] = useState(null);
  const [likedList, setLikedList] = useContext(likedListContext);

  useEffect(() => {
    if (likedList.includes(ticker)) {
      setCheck(true);
      setLike(false);
    } else {
      setCheck(false);
    }
  }, []);

  const handleClick = (e) => {
    if (like) {
      e.target.style.color = "red";
      e.target.innerHTML = "&#9829;";
      setLikedList([...likedList, e.target.id]);
    } else {
      e.target.style.color = "black";
      e.target.innerHTML = "&#9825;";
      setLikedList(likedList.filter((companies) => companies !== ticker));
    }
    setLike(!like);
  };

  return (
    <div className={styles.container}>
      <div className={styles.shape}>
        {check ? (
          <div
            id={ticker}
            style={{ color: "red" }}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            &#9829;
            {/* <IoIosHeartEmpty /> */}
          </div>
        ) : (
          <div
            id={ticker}
            style={{ color: "black" }}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            &#9825;
            {/* <IoIosHeartEmpty /> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default LikeButton;
