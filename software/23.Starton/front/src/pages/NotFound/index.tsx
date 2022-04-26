import React from "react";
import styled from "styled-components";

interface NotFoundProps {

}

const NotFound = ({   }: NotFoundProps): JSX.Element => {
  return (
    <Container>
      <ErrorContainer>
        <NotFoundTitle>404 Page not found</NotFoundTitle>
        <NotFoundImage src={'/assets/pageNotFound.svg'} />
      </ErrorContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
  background-color: rgba(65, 88, 208, 0.19);
  background-image: linear-gradient(43deg, rgba(65, 88, 208, 0.2) 0%, rgba(200, 80, 192, 0.2) 46%, rgba(255, 204, 112, 0.2) 100%);
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 12px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const NotFoundTitle = styled.h1`
  margin: 0 0 24px 0;
  color: #3D3D3D;
  text-align: center;
`;

const NotFoundImage = styled.img`
  width: 245px;
`;

export default NotFound;