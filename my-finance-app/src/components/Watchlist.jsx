import React, { useContext } from "react";
import { likedListContext } from "../App";
import LikeButton from "./LikeButton";
import WatchlistCards from "./WatchlistCards";

function Watchlist() {
  const [likedList, setLikedList] = useContext(likedListContext);
  return (
    <div className="bodyContent">
      <h1>My Watchlist</h1>
      {likedList.map((ticker, index) => (
        <WatchlistCards
          key={index}
          likedList={likedList}
          setLikedList={setLikedList}
          ticker={ticker}
          // index={index}
        />
      ))}
    </div>
  );
}

export default Watchlist;
