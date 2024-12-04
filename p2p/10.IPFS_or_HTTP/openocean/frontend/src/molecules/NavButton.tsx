import { Button, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";

interface NavButtonProps {
  path: string;
  icon: IconType;
  label: string;
}
const NavButton: FC<NavButtonProps> = ({ path, icon, label }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Button onClick={() => navigate(path)} flexDir="column" variant="primary">
      <Icon
        color={location.pathname.includes(path) ? "purple.200" : undefined}
        as={icon}
        fontSize="32px"
      />
      <span style={{ fontSize: "14px" }}>{label}</span>
    </Button>
  );
};

export default NavButton;
