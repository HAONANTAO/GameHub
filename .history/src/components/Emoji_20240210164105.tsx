import React from "react";

import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from ""
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  return <div></div>;
};

export default Emoji;
