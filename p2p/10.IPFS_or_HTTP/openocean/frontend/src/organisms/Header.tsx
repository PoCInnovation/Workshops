import { FC } from "react";
import { HStack } from "@chakra-ui/react";
import HomeButton from "../molecules/HomeButton";
import NavButton from "../molecules/NavButton";
import HeaderContainer from "../atoms/HeaderContainer";
import { RiImageAddFill } from "react-icons/ri";

const Header: FC = () => (
  <HeaderContainer>
    <HomeButton />
    <HStack spacing="24px">
      <NavButton path="/upload" icon={RiImageAddFill} label="Upload" />
    </HStack>
  </HeaderContainer>
);

export default Header;
