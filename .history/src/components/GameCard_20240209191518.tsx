import React from "react";
import { Games } from "../interfaces/gameInterfaces.ts";
interface Props {
  game: Games;
}
const GameCard = (props: Props) => {
  const { game } = props;
  return <Card></Card>;
};

export default GameCard;
