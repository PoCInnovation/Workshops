import {
  FormControl,
  Button,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
  VStack,
  chakra,
  useToast,
} from "@chakra-ui/react";
import { FC } from "react";
import SingleUploadImage from "../molecules/SingleUploadImage";
import { colors } from "../theme";
import { useForm } from "react-hook-form";
import { RiImageAddFill } from "react-icons/ri";
import usePostImage from "../hooks/usePostImage";
import { useNavigate } from "react-router-dom";

interface MintForm {
  name: string;
  description: string;
  file: File;
  collection: string;
  price: number;
}

const UploadPage: FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<MintForm>();

  const toast = useToast();

  const navigate = useNavigate();

  const { mutate: postImage, isPending: isPendingPostImage } =
    usePostImage();

  const onSubmit = handleSubmit((data) => {
    if (!data.file) {
      setError("file", { message: "This field is required" });
      return;
    }
    postImage({ image: data.file, name: data.name }, {
      onSuccess: (res) => {
        toast({
          colorScheme: "purple",
          title: "Image uploaded",
          description: "Your image has been uploaded successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate(`/images/${res.data.id}`)
      },
      onError: (err) => {
        console.log(err)
        toast({
          colorScheme: "red",
          title: "Error",
          description: "There was an error uploading the image to IPFS",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
    });
  });

  return (
    <VStack align="start" w="100%" h="100%" spacing="32px">
      <Text userSelect="none" fontSize="32px">
        Upload new picture
      </Text>
      <Stack
        flexDir={{
          base: "column",
          lg: "row",
        }}
        alignItems="stretch"
        w="100%"
        h="100%"
        spacing="48px"
        minW="300px"
      >
        <FormControl isInvalid={!!errors.file}>
          <SingleUploadImage
            w="100%"
            h={{ base: "100px", lg: "100%" }}
            maxH="70vh"
            bg="blackAlpha.500"
            _hover={{ bg: "gray.900" }}
            border={errors.file ? "1px solid red" : undefined}
            transition="0.5s"
            borderRadius="12px"
            onUpdateFile={(file: File) => {
              setValue("file", file);
              clearErrors("file");
            }}
          />
          {errors.file && (
            <FormErrorMessage>An image is required</FormErrorMessage>
          )}
        </FormControl>
        <chakra.form onSubmit={onSubmit} w="100%" h="100%">
          <VStack w="100%" justify="space-between" h="100%">
            <VStack maxW="800px" w="100%" spacing="24px">
              <FormControl isInvalid={!!errors.name}>
                <FormLabel color="gray.600">Name</FormLabel>
                <Input
                  {...register("name", { required: true })}
                  color="gray.300"
                  placeholder="Enter your image name..."
                  boxShadow="lg"
                  border={`1px solid ${colors.gray[700]}`}
                />
                {errors.name && (
                  <FormErrorMessage>This field is required</FormErrorMessage>
                )}
              </FormControl>
            </VStack>
            <Button
              type="submit"
              p="64px"
              fontWeight="black"
              fontSize="32px"
              gap="12px"
              isLoading={isPendingPostImage}
            >
              Upload
              <Icon as={RiImageAddFill} />
            </Button>
          </VStack>
        </chakra.form>
      </Stack>
    </VStack>
  );
};

export default UploadPage;
