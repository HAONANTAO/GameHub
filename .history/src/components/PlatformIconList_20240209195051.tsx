import React from "react";
import { Platform } from "../interfaces/gameInterfaces";
import { Text } from "@chakra-ui/react";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      {" "}
      {platformsmap((platform: Platform) => (
        <Text>{platform.platform.name}</Text>
      ))}
    </>
  );
};

export default PlatformIconList;
