import { FC } from "react";
import Logo from "../atoms/Logo";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HomeButton: FC = () => {
  const navigate = useNavigate();

  return (
    <Box cursor="pointer" onClick={() => navigate("/")}>
      <Logo />
    </Box>
  );
};

export default HomeButton;
