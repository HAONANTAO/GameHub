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
import { Icon, Text } from "@chakra-ui/react";
import { FaL } from "react-icons/fa6";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  //icon和名字的映射mapping
  const iconMap: {} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      {" "}
      {platforms.map((platform: Platform) => (
        <Icon as={iconMap[platform.slug]} />
      ))}
    </>
  );
};

export default PlatformIconList;
