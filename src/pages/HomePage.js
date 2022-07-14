import React from "react";
import bgGame from "../assets/bgGame.png";
import DiceGame from "../components/DiceGame";
import Result from "../components/Result";

export default function HomePage() {
  return (
    <div
      className="bg_game"
      style={{
        backgroundImage: `url(${bgGame})`,
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <DiceGame />
      <Result />
    </div>
  );
}
