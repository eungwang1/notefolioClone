import React from "react";
import styled from "styled-components";
import HotContentSwiper from "./HotContentSwiper";
import RecruitContent from "./RecruitContent";

const TopContent: React.FC = () => {
  return (
    <TopContentContainer>
      <HotContentSwiper />
      <RecruitContent />
    </TopContentContainer>
  );
};

export default TopContent;

const TopContentContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
`;
