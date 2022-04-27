import React from "react";
import styled from "styled-components";
import TopBar from "pages/Dashboard/TopBar";
import NftManager from "pages/Dashboard/NftManager";

interface DashboardProps {

}

const Dashboard = ({   }: DashboardProps): JSX.Element => {
  return (
    <ParentContainer>
      <TopBar />
      <NftManager />
    </ParentContainer>
  );
};

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default Dashboard;