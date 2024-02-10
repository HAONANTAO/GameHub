import React from "react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  return <div></div>;
};

export default Emoji;
