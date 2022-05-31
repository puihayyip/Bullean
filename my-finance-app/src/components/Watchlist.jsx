import React, { useContext } from "react";
import { stateContext } from "../App";
import LikeButton from "./LikeButton";
import WatchlistCards from "./WatchlistCards";

function Watchlist() {
  const [state, setState] = useContext(stateContext);
  return (
    <div className="bodyContent">
      <h1>My Watchlist</h1>
      {state.likedList.map((ticker, index) => (
        <WatchlistCards
          key={index}
          state={state}
          setState={setState}
          ticker={ticker}
          // index={index}
        />
      ))}
    </div>
  );
}

export default Watchlist;
