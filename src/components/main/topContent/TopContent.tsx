import React from "react";
import styled from "styled-components";
import HotContentSwiper from "./HotContentSwiper";
import MiniCard from "../CardCollection/MiniCard";
import { media } from "../../../styles/theme";
import { useAppSelector } from "../../../store/hook";
import RecruitContent from "./RecruitContent";
const TopContent: React.FC = () => {
  const { recruitList } = useAppSelector((state) => state.notefolioSlice);
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
