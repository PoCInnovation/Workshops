import {
  Card,
  Divider,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, useState, useEffect } from "react";
import IMGCard from "../../atoms/IMGCard";
import { useNavigate } from "react-router-dom";
import useGetImages from "../../hooks/useGetImages";

const ImageCard: FC<{ img: any }> = ({ img }) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/images/${img.id}`)}
      cursor="pointer"
      role="group"
      gap="12px"
      p="12px"
    >
      <Text textAlign="center" color="gray.300" fontWeight="bold">
        {img.metadata?.name}
      </Text>
      <Divider w="50%" mx="auto" />
      <IMGCard key={img.id} url={img?.filename} />
    </Card>
  );
};

const ImagePage: FC = () => {
  const [images, setImages] = useState<any[]>([]);

  const { mutate: getImages } = useGetImages();

  useEffect(() => {
    getImages(undefined, {
      onSuccess: (data) => {
        setImages(data.data);
      },
      onError: (error) => {
        console.error("Erreur :", error);
      },
    });
  }, [getImages]);

  return (
    <VStack align="start" w="100%" h="100%" spacing="12px">
      <Text userSelect="none" fontSize="32px">
        All images
      </Text>
      <SimpleGrid w="100%" gap="24px" columns={5}>
        {images.map((img) => (
          <ImageCard key={img.id} img={img} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default ImagePage;
