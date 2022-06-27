import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { faker } from "@faker-js/faker";
import { Navigation } from "swiper";
import styled from "styled-components";
const HotcontentSwiper = () => {
  const coverImage = [faker.image.fashion(), faker.image.animals()];
  const profileImage = faker.image.avatar();
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
        <SwiperSlide>
          <Card
            username="반로라"
            category="디지털 아트"
            coverImage={coverImage}
            profileImage={profileImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            username="반로라"
            category="디지털 아트"
            coverImage={coverImage}
            profileImage={profileImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            username="반로라"
            category="디지털 아트"
            coverImage={coverImage}
            profileImage={profileImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            username="반로라"
            category="디지털 아트"
            coverImage={coverImage}
            profileImage={profileImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            username="반로라"
            category="디지털 아트"
            coverImage={coverImage}
            profileImage={profileImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            username="반로라"
            category="디지털 아트"
            coverImage={coverImage}
            profileImage={profileImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            username="반로라"
            category="디지털 아트"
            coverImage={coverImage}
            profileImage={profileImage}
          />
        </SwiperSlide>
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
  .swiper {
    padding-top: 30px;
    position: relative;
  }
  .swiper-title {
    font-size: 16px;
    letter-spacing: -0.4px;
    font-weight: 700;
    line-height: 19px;
    color: #161c1c;
    position: absolute;
    top: 0px;
  }
  .swiper-next-btn {
    position: absolute;
    right: 20px;
    top: 0px;
    cursor: pointer;
    z-index: 999;
    span {
      font-size: 20px;
    }
  }
  .swiper-prev-btn {
    position: absolute;
    right: 40px;
    top: 0px;
    cursor: pointer;
    z-index: 999;
    span {
      font-size: 20px;
    }
  }
`;
