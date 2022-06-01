import React, { useState, useEffect } from "react";
import backgroundImg from "../pics/moneyDrop.gif";
import voice from "../pics/ScammerVoice.mp3";
import yay from "../pics/ChildrenYaySoundEffect.mp3";
import $ from "jquery";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function Home() {
  const { width, height } = useWindowSize();
  const [time, setTime] = useState(120);
  const [explode, setExplode] = useState(false);
  const computer = new Audio(voice);
  const childrenYay = new Audio(yay);

  useEffect(() => {
    while (time > 0) {
      const interval = setInterval(() => setTime(time - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  $(".congrats").css("color", `rgb(${r},${g},${b})`);
  $(".IamABorder").css("borderColor", `rgb(${r},${g},${b})`);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target[0].value = "";
    setExplode(true);
    childrenYay.play();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "600px",
        display: "flex",
      }}
    >
      <div
        className="IamABorder"
        style={{
          color: "black",
          display: "inline-block",
          margin: "auto",
          backgroundColor: "lightgray ",
          border: "10px red outset",
          padding: "50px",
        }}
      >
        <h1 className="congrats">CONGRATULATIONS!</h1>
        <h1>1 $1000 Amazon Gift Card</h1>
        <h2>
          is reserved just for you, <i>Facebook User</i>!
        </h2>
        <br />
        <p>Step 1: Click the SEARCH button to claim your price.</p>
        <p>Step 2: Enter your credit card number to claim your price</p>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="" id="" placeholder="Credit Card" />
          <button>Submit</button>
        </form>
        <br />
        <p>
          You have <b>{time} seconds</b> left to claim your prize!
        </p>
      </div>
      {explode && (
        <Confetti
          width={width}
          height={height}
          confettiSource={{ x: width / 2, y: height / 2 - 300, h: 400 }}
          initialVelocityX={50}
        />
      )}
      <audio autoPlay>
        <source src={voice} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
      {/* <audio autoPlay>
        <source src={yay} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio> */}
    </div>
  );
}

export default Home;
