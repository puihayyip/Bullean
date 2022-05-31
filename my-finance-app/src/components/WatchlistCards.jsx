import React from "react";
import { AiFillDelete } from "react-icons/ai";

function WatchlistCards({ index, ticker, setState, state }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <p>{ticker}</p>
      <AiFillDelete
        onClick={() =>
          setState({
            likedList: state.likedList.filter(
              (companies) => companies !== ticker
            ),
          })
        }
      />
    </div>
  );
}

export default WatchlistCards;
