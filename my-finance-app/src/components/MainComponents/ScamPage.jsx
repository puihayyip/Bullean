import React, { useState, useEffect } from "react";
import backgroundImg from "../../resources/moneyDrop.gif";
import voice from "../../resources/ScammerVoice.mp3";
import yay from "../../resources/ChildrenYaySoundEffect.mp3";
import emotionalDamage from "../../resources/EmotionalDamage.mp3";
import FBIOpenUp from "../../resources/FBIOpenUp.mp4";
import $ from "jquery";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function ScamPage() {
  const { width, height } = useWindowSize();
  const [time, setTime] = useState(90);
  const [explode, setExplode] = useState(false);
  const [pass, setPass] = useState(false);
  const childrenYay = new Audio(yay);
  const damageSound = new Audio(emotionalDamage);

  useEffect(() => {
    while (time > 0 && !pass) {
      const interval = setInterval(() => setTime(time - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  pass ? $(".navbar").show() : $(".navbar").hide();
  if (time === 0) {
    return (
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
        }}
      >
        <video width="100%" height="100%" autoPlay loop>
          <source src={FBIOpenUp} type="video/mp4" />
        </video>
      </div>
    );
  }

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  $(".congrats").css("color", `rgb(${r},${g},${b})`);
  $(".IamABorder").css("borderColor", `rgb(${r},${g},${b})`);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "emotionaldamage") {
      setExplode(true);
      childrenYay.play();
      setPass(true);
    }
    e.target[0].value = "";
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        height: "100vh",
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
          border: "10px red groove",
          padding: "50px",
        }}
      >
        <h1 className="congrats">CONGRATULATIONS!</h1>
        <h1>1 $1000 Amazon Gift Card</h1>
        <h2>
          is reserved just for you, <i>Fellow Coder!</i>
        </h2>
        <br />
        <p>Step 1: Find your credit card</p>
        <p>Step 2: Enter your credit card number to claim your prize</p>
        <p>Step 3: Submit the form to pay the tax for the gift card</p>
        <p>Step 4: Receive the gift card in your inbox</p>
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
    </div>
  );
}

export default ScamPage;
