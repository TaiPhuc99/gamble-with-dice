import { OPTION, PLAY_GAME } from "../constants/DiceConstant";

export const optionAction = (value) => {
  return {
    type: OPTION,
    payload: value,
  };
};

export const playGameAction = () => {
  return {
    type: PLAY_GAME,
  };
};
