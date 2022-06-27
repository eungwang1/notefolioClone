import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { faker } from "@faker-js/faker";
import { Navigation } from "swiper";
import styled from "styled-components";
import { hoverStyle01, media } from "../../styles/theme";
const HotcontentSwiper = () => {
  const CardList = Array.from({ length: 8 }, (v, i) => ({
    coverImage: [faker.image.fashion(), faker.image.animals()],
    profileImage: faker.image.avatar(),
    username: faker.lorem.word(),
    category: faker.lorem.words(2),
  }));
  return (
    <HotcontentSwiperContainer>
      <Swiper
        slidesPerView={4}
        slidesPerGroup={1}
        navigation={{
          nextEl: ".swiper-next-btn",
          prevEl: ".swiper-prev-btn",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <div className="swiper-title">HOT 크리에이터🔥</div>
        {CardList.map((card, idx) => (
          <SwiperSlide key={idx}>
            <Card
              username={card.username}
              category={card.category}
              coverImage={card.coverImage}
              profileImage={card.profileImage}
            />
          </SwiperSlide>
        ))}

        <div className="swiper-prev-btn">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div className="swiper-next-btn">
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>
      </Swiper>
    </HotcontentSwiperContainer>
  );
};

export default HotcontentSwiper;

const HotcontentSwiperContainer = styled.div`
  padding: 24px;
  width: 80%;
  ${media.custom(1340)} {
    width: 100%;
  }
  .swiper {
    padding-top: 30px;
    position: relative;
  }
  .swiper-title {
    font-size: 16px;
    letter-spacing: -0.4px;
    font-weight: 700;
    line-height: 19px;
    color: ${(props) => props.theme.palette.Black01};
    position: absolute;
    top: 0px;
  }
  .swiper-next-btn {
    right: 20px;
  }
  .swiper-prev-btn {
    right: 40px;
  }
  .swiper-next-btn,
  .swiper-prev-btn {
    position: absolute;
    top: 0px;
    cursor: pointer;
    z-index: 999;
    span {
      font-size: 20px;
    }
    ${hoverStyle01}
  }
`;
