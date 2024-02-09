import React from "react";
import { Platform } from "../interfaces/gameInterfaces";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      {" "}
      {game.parent_platforms.map((platform: Platform) => (
        <Text>{platform.platform.name}</Text>
      ))}
    </>
  );
};

export default PlatformIconList;
