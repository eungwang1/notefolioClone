import React from "react";
import styled from "styled-components";
import HotcontentSwiper from "./HotcontentSwiper";
import { faker } from "@faker-js/faker";
import MiniCard from "./MiniCard";
const recruitObj = Array.from({ length: 4 }, (v, k) => ({
  image: faker.image.cats(),
  title: faker.lorem.word(),
  name: faker.lorem.word(),
}));
const Hotcontent = () => {
  return (
    <HotcontentContainer>
      <HotcontentSwiper />
      <div className="card-box">
        <div className="card-box-title">디자인 포지션 채용 공고 💼</div>
        {recruitObj.map((item, idx) => (
          <MiniCard image={item.image} title={item.title} name={item.name} key={idx} />
        ))}
      </div>
    </HotcontentContainer>
  );
};

export default Hotcontent;

const HotcontentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
  .card-box {
    display: flex;
    flex-direction: column;
    width: 20%;
    margin-top: 20px;
  }
  .card-box-title {
    font-size: 16px;
    letter-spacing: -0.4px;
    font-weight: 700;
    line-height: 19px;
    color: #161c1c;
    margin-bottom: 15px;
  }
`;
