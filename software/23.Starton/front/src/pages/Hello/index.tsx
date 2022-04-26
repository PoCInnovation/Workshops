import React, {useCallback, useState} from "react";
import styled from "styled-components";

interface HelloProps {

}

const Hello = ({}: HelloProps): JSX.Element => {
  const [hoverStatus, setHoverStatus] = useState(false);

  const handleHover = useCallback(() => {
    setHoverStatus((oldStatus) => !oldStatus);
  }, [setHoverStatus]);

  return (
    <Container hoverStatus={hoverStatus}>
      <Title
        hoverStatus={hoverStatus}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        Hello World 👋🏻
      </Title>
    </Container>
  );
};

interface StyledProps {
  hoverStatus: boolean;
}

const Container = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
  background-color: ${({hoverStatus}) => hoverStatus ? 'white' : '#FBAB7E'};
  background-image: ${({hoverStatus}) => hoverStatus ? 'unset' : 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'};
`;

const Title = styled.h1<StyledProps>`
  cursor: not-allowed;
  user-select: none;
  margin: 0;
  font-size: 120px;
  font-weight: bold;
  text-align: center;
  color: ${({hoverStatus}) => hoverStatus ? '#FBAB7E' : 'white'};
`;

export default Hello;