import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../store/hook";
import { media } from "../../../styles/theme";
import MiniCard from "../cardCollection/MiniCard";

const RecruitContent = () => {
  const { recruitList } = useAppSelector((state) => state.notefolioSlice);

  return (
    <RecruitContentContainer>
      <div className="card-box-title">디자인 포지션 채용 공고 💼</div>
      {recruitList.map((item, idx) => (
        <MiniCard image={item.image} title={item.title} name={item.name} key={idx} type="normal" />
      ))}
      <MiniCard type="primary" title="디자이너를 채용 중이신가요?" name="최고의 디자이너를 찾는 방법" />
    </RecruitContentContainer>
  );
};

export default RecruitContent;

const RecruitContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-top: 20px;
  ${media.custom(1340)} {
    display: none;
  }
  .card-box-title {
    font-size: 16px;
    letter-spacing: -0.4px;
    font-weight: 700;
    line-height: 19px;
    color: ${(props) => props.theme.palette.Black01};
    margin-bottom: 15px;
  }
`;
