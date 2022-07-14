import { randomIntFromInterval } from "../../components/DiceUtility";
import { BIG, OPTION, PLAY_GAME, SMALL } from "../constants/DiceConstant";

const initialState = {
  diceArr: [
    {
      value: 1,
      img: "./imgXucSac/1.png",
    },
    {
      value: 1,
      img: "./imgXucSac/1.png",
    },
    {
      value: 1,
      img: "./imgXucSac/1.png",
    },
  ],
  option: null,
  winNum: 0,
  loseNum: 0,
  turnNum: 0,
  isPlaying: false,
};

export const DiceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPTION: {
      // Update state
      state.option = payload;
      return { ...state };
    }

    case PLAY_GAME: {
      // Total dice score >= 11 ? BIG : SMALL
      let sumScore = 0;

      // Create random score & render dice image
      let newDiceArr = state.diceArr.map((dice) => {
        const randomScore = randomIntFromInterval(1, 6);
        sumScore += randomScore;
        return {
          value: randomScore,
          img: `./imgXucSac/${randomScore}.png`,
        };
      });

      // Check result
      const result = sumScore >= 11 ? BIG : SMALL;
      let totalTurns = state.turnNum + 1;
      let totalWins = state.option === result ? state.winNum + 1 : state.winNum;
      let totalLoose = totalTurns - totalWins;

      // Update State
      state.diceArr = newDiceArr;
      state.winNum = totalWins;
      state.loseNum = totalLoose;
      state.turnNum = totalTurns;
      state.isPlaying = true;
      return { ...state };
    }

    default:
      return state;
  }
};
