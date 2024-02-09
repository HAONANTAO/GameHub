import {FaWindows,FaPlaystation,FaXbox,FaApple} from "react-icons/fa";
import { Platform } from "../interfaces/gameInterfaces";
import { Text } from "@chakra-ui/react";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      {" "}
      {platforms.map((platform: Platform) => (
        <Text>{platform.name}</Text>
      ))}
    </>
  );
};

export default PlatformIconList;
