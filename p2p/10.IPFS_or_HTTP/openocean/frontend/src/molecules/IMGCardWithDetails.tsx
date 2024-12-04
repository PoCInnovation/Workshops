import { Box, Card, Icon, Text, Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import IMGCard from "../atoms/IMGCard";
import { FaQuestion } from "react-icons/fa";

interface IMGCardWithDetailsProps {
  name: string;
  description: string;
  img?: string;
  onClick: () => void;
}
const IMGCardWithDetails: FC<IMGCardWithDetailsProps> = ({
  name,
  description,
  img,
  onClick,
}) => (
  <Tooltip
    noOfLines={4}
    label={
      <Box w="100%" p="8px">
        <Text noOfLines={3} color="gray.300">
          {description}
        </Text>
      </Box>
    }
  >
    <Card
      boxShadow="lg"
      {...(img && { cursor: "pointer", onClick })}
      w="100%"
      bg="linear-gradient(145deg, #2b2e3a, #1f2029)"
    >
      <IMGCard url={img} />
      {!img && (
        <Icon
          as={FaQuestion}
          left="calc(50% - 10px)"
          top="calc(50% - 25px)"
          w="20px"
          h="20px"
          color="white"
          position="absolute"
        />
      )}
      <Box p="4px" w="100%">
        <Text
          userSelect="none"
          textAlign="center"
          noOfLines={1}
          color="gray.300"
          fontWeight="bold"
        >
          {name}
        </Text>
      </Box>
    </Card>
  </Tooltip>
);

export default IMGCardWithDetails;
