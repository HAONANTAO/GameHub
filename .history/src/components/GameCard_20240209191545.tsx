import React from "react";
import { Games } from "../interfaces/gameInterfaces.ts";
import {Card,Image} from ""

interface Props {
  game: Games;
}
const GameCard = (props: Props) => {
  const { game } = props;
  return (
    <Card>
      <Image></Image>
    </Card>
  );
};

export default GameCard;
