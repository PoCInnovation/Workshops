import {
  Center,
  chakra,
  VStack,
  ScaleFade,
  Text,
  Icon,
  Image,
  ChakraProps,
  CenterProps,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { MdAdd } from "react-icons/md";

interface SingleUploadImageProps {
  size?: ChakraProps["boxSize"];
  rounded?: ChakraProps["rounded"];
  onUpdateFile: (file: File) => void;
}
const SingleUploadImage: FC<SingleUploadImageProps & CenterProps> = ({
  onUpdateFile,
  ...props
}) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileChange = (event: { target: { files: FileList | null } }) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploadedFile(file);
    onUpdateFile(file);
  };

  return (
    <Center
      as={chakra.label}
      htmlFor="file"
      cursor="pointer"
      overflow="hidden"
      position="relative"
      {...props}
    >
      {uploadedFile ? (
        <ScaleFade initialScale={0.9} in={uploadedFile !== null}>
          <Image
            w="100%"
            h="100%"
            src={URL.createObjectURL(uploadedFile)}
            alt="Uploaded"
          />
        </ScaleFade>
      ) : (
        <Center position="absolute" w="100%" h="100%" transition="0.5s">
          <VStack
            fontSize={{ base: "16px", lg: "24px" }}
            color="gray.300"
            spacing={0}
          >
            <Icon as={MdAdd} />
            <Text>Upload</Text>
          </VStack>
        </Center>
      )}

      <chakra.input
        required
        style={{ display: "none" }}
        type="file"
        id="file"
        name="file"
        onChange={handleFileChange}
      />
    </Center>
  );
};

export default SingleUploadImage;
