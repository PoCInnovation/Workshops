import React from "react";
import styled from "styled-components";

interface TopBarProps {

}

const TopBar = ({  }: TopBarProps): JSX.Element => {
  return (
    <Container>
      <Text>Welcome to your NFT manager!</Text>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  user-select: none;
  padding: 11px 16px;
  box-sizing: border-box;
  background: white;
`;

const Text = styled.h1`
  margin: 0;
  font-size: 100%;
  font-weight: normal;
`;

export default TopBar;