import { Button, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  onClick: () => void;
}
const SectionTitle: FC<SectionTitleProps> = ({
  onClick,
  title,
  subtitle = "View all",
}) => (
  <HStack spacing="24px">
    <Text fontSize="32px" userSelect="none">
      {title}
    </Text>
    <Button onClick={onClick} mt="auto" variant="primary">
      {subtitle}
    </Button>
  </HStack>
);

export default SectionTitle;
