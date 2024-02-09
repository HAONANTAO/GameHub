import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../interfaces/gameInterfaces";
import { Text } from "@chakra-ui/react";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {

  const iconMap={
    pc: FaWindows,
    playstation:FaPlaystation,
    xbox:FaXbox,
    nintendo:SiNintendo,
    mac:FaApple,
  }
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
