import { HStack } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

const HeaderContainer: FC<PropsWithChildren> = ({ children }) => (
  <HStack
    width="100%"
    height="64px"
    bg="gray.900"
    spacing={0}
    justify="space-between"
    userSelect="none"
    p="24px"
    boxShadow="lg"
  >
    {children}
  </HStack>
);

export default HeaderContainer;
