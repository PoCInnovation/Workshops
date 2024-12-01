import {
  Box,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, useState, useEffect } from "react";
import IMGCard from "../../atoms/IMGCard";
import { useParams } from "react-router-dom";
import useGetImageByID from "../../hooks/useGetImageByID";

const ImageDetailsPage: FC = () => {
  const { id } = useParams();
  const [img, setImg] = useState<any[]>([]);

  const { mutate: getImageByID } = useGetImageByID();

  useEffect(() => {
    getImageByID(id, {
      onSuccess: (data) => {
        setImg(data.data);
        console.log(data.data)
      },
      onError: (error) => {
        console.error("Erreur :", error);
      },
    });
  }, [getImageByID]);

  if (!img) return null;

  return (
    <VStack w="100%" align="start" p="16px">
      <HStack w="100%" justify="space-between">
        <HStack fontSize="24px" userSelect="none">
          <Text fontWeight="light" color="gray.500">
            #{img.id}
          </Text>
          <Text fontWeight="black">{img.name}</Text>
        </HStack>
      </HStack>
      <HStack spacing="24px" align="stretch" w="100%">
        <Box transition="0.5s" w="100%">
          <IMGCard url={img.filename} />
        </Box>
      </HStack>
    </VStack >
  );
};

export default ImageDetailsPage;
