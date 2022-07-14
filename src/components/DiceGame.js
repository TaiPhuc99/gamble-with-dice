/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { optionAction } from "../redux/actions/DiceAction";
import { BIG, SMALL } from "../redux/constants/DiceConstant";
import Title from "./Title";

export default function DiceGame() {
  // Receive state from redux to render
  const { diceArr } = useSelector((state) => {
    return state.DiceReducer;
  });

  // Handle Big or Small
  const dispatch = useDispatch();

  return (
    <div className="container">
      <Title content="DICE GAME" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="mt-3"
      >
        <button
          className="btn btn-danger btn-style"
          onClick={() => {
            dispatch(optionAction(BIG));
          }}
        >
          BIG
        </button>

        {/* Render dice */}
        <div>
          {diceArr.map((dice, index) => {
            return (
              <img src={dice.img} className="img-style" key={`img-${index}`} />
            );
          })}
        </div>

        <button
          className="btn btn-dark btn-style"
          onClick={() => {
            dispatch(optionAction(SMALL));
          }}
        >
          SMALL
        </button>
      </div>
    </div>
  );
}
