import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playGameAction } from "../redux/actions/DiceAction";

export default function Result() {
  // Receive state from redux
  const { option, winNum, loseNum, turnNum, isPlaying } = useSelector(
    (state) => {
      return state.DiceReducer;
    }
  );

  // Handle Play Game
  const dispatch = useDispatch();

  return (
    <div className="mt-4 mt-lg-2 text-center">
      <h3 className="text-success">Please Pick Your Choice First!</h3>
      {option && <h3 className="text-success">Your Choice: {option}!</h3>}
      {isPlaying && <h4 className="text-primary">Result</h4>}
      {isPlaying && <h3 className="text-danger">Total Wins: {winNum}</h3>}
      {isPlaying && <h3 className="text-dark">Total Looses: {loseNum}</h3>}
      {isPlaying && <h3 className="text-warning">Total Turns: {turnNum}</h3>}

      {option && (
        <button
          className="btn btn-success"
          onClick={() => {
            dispatch(playGameAction());
          }}
        >
          Play Game
        </button>
      )}
    </div>
  );
}
