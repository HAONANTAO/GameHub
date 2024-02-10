import React from "react";

import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  c
  if (rating < 3) return null;
  return <div></div>;
};

export default Emoji;
