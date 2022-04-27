import {partnerList} from "pages/Connection/data";
import React, { useCallback } from "react";
import styled from "styled-components";

interface ConnectionProps {
  pageType?: 'login' | 'register'
}

const Connection = ({ pageType = 'login'  }: ConnectionProps): JSX.Element => {
  const handleClickLogin = useCallback(() => {
    console.log('Complete this function to access the url \'/login\'.');
  }, []);

  const handleClickRegister = useCallback(() => {
    console.log('Complete this function to access the url \'/register\'.');
  }, []);

  return (
    <ParentContainer>
      <Container>
        <LoginContainer>
          <LoginIcon src={'/assets/log-in-outline.svg'} />
          <Title>Welcome</Title>
          <Description>Please enter your information.</Description>
          <ConnectionForm>

          </ConnectionForm>
          <FooterContainer>
            {pageType === 'login' ?
              <FooterText>
                {"Don't have an account ? "}
                <FooterLink onClick={handleClickRegister} >Register</FooterLink>
              </FooterText> :
              <FooterText>
                {"Already have an account ?"}
                <FooterLink onClick={handleClickLogin} >Login</FooterLink>
              </FooterText>}
          </FooterContainer>
        </LoginContainer>
        <InfosContainer>
          <ImageContainer>
            <Image src={'/assets/loginPage.svg'}/>
          </ImageContainer>
          <PartnerContainer>
            {partnerList && partnerList.map((element) => (
              <PartnerButton key={element.name} href={element.link} target="_blank" >
                <PartnerImage src={element.logoPath}/>
              </PartnerButton>
            ))}
          </PartnerContainer>
        </InfosContainer>
      </Container>
    </ParentContainer>
  );
};



const ParentContainer = styled.div`
  // display configuration
  display: flex;
  align-items: center;
  justify-content: center;

  // Spatial configuration
  width: 100%;
  height: 100%;

  // Style configuration
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
`;

const Container = styled.div`
  display: flex;
  width: 70%;
  height: 80%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
`;

const LoginIcon = styled.img`
  height: 60px;
  user-select: none;
`;

const Title = styled.h1`
  width: 100%;
  margin: 24px 0 8px 0;
  font-size: 50px;
  color: #3D3D3D;
  text-align: center;
  user-select: none;
`;

const Description = styled.p`
  margin: 0;
  width: 100%;
  padding-bottom: 40px;
  color: #808080;
  text-align: center;
  user-select: none;
`;

const ConnectionForm = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  overflow: hidden;
  border-radius: 12px;
  box-sizing: border-box;
  border: 1px #f6f6f6 solid;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 84px;
  user-select: none;
`;

const FooterText = styled.p`
  margin: 0;
  width: 100%;
  color: #808080;
  text-align: center;
`;

const FooterLink = styled.a`
  margin: 0;
  width: 100%;
  color: #808080;
  text-align: center;
  cursor: pointer;

  :hover {
    color: #C850C0;
    text-decoration: #ffb4f9 wavy underline;
  }
`;

// LEFT PART

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
  padding: 24px;
  box-sizing: border-box;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;

  @media (max-width: 999px) {
    width: 100%;
  }
`;

// RIGHT PART
const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  background: rgba(255, 255, 255, 0.8);
  user-select: none;

  @media (max-width: 999px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60%;
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const PartnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40%;
  padding: 60px 100px;
  box-sizing: border-box;
`;

const PartnerButton = styled.a`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;
  overflow: hidden;
  padding: 8px 0;
  box-sizing: border-box;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  }
`;

const PartnerImage = styled.img`
  height: 100%;
`;

export default Connection;
