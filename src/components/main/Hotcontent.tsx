import React from "react";
import styled from "styled-components";
import HotcontentSwiper from "./HotcontentSwiper";
import { faker } from "@faker-js/faker";
import MiniCard from "./MiniCard";
import { media } from "../../styles/theme";
const recruitObj = Array.from({ length: 3 }, (v, k) => ({
  image: faker.image.city(480, 480, true),
  title: faker.lorem.words(2),
  name: faker.lorem.word(),
}));
const Hotcontent = () => {
  return (
    <HotcontentContainer>
      <HotcontentSwiper />
      <div className="card-box">
        <div className="card-box-title">디자인 포지션 채용 공고 💼</div>
        {recruitObj.map((item, idx) => (
          <MiniCard image={item.image} title={item.title} name={item.name} key={idx} type="normal" />
        ))}
        <MiniCard type="primary" title="디자이너를 채용 중이신가요?" name="최고의 디자이너를 찾는 방법" />
      </div>
    </HotcontentContainer>
  );
};

export default Hotcontent;

const HotcontentContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
  .card-box {
    display: flex;
    flex-direction: column;
    width: 20%;
    margin-top: 20px;
    ${media.custom(1340)} {
      display: none;
    }
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
