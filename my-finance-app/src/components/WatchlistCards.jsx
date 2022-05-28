import React from "react";

function WatchlistCards({ index, ticker, setLikedList, likedList }) {
  return (
    <div>
      <p>{ticker}</p>
      <button
        onClick={() =>
          setLikedList(likedList.filter((companies) => companies !== ticker))
        }
      >
        remove
      </button>
    </div>
  );
}

export default WatchlistCards;
