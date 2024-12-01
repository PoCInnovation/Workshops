import { Icon, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { BsEasel } from "react-icons/bs";

const Logo: FC = () => (
  <VStack spacing={0}>
    <Icon as={BsEasel} fontSize="24px" color="purple.200" />
    <Text color="purple.200" fontFamily="heading" fontWeight="semibold">
      OpenOcean
    </Text>
  </VStack>
);

export default Logo;
