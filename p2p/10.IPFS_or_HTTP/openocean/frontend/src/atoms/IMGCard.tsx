import { AspectRatio, Box } from "@chakra-ui/react";
import { FC } from "react";
import { urlFromFileName } from "../utils";

interface ImageCardProps {
  url?: string;
  ratio?: number;
}
const IMGCard: FC<ImageCardProps> = ({ url, ratio = 16 / 9 }) => (
  <AspectRatio ratio={ratio} w="100%" h="100%">
    <Box
      transitionDuration="0.5s"
      _groupHover={
        url && {
          opacity: "1",
        }
      }
      _hover={
        url && {
          opacity: "1",
        }
      }
      opacity="0.6"
      boxShadow="xl"
      borderRadius="4px"
      background={url ? `url(${urlFromFileName(url)})` : "gray.800"}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    />
  </AspectRatio>
);

export default IMGCard;
