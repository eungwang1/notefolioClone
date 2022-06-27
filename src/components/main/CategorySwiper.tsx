import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { hoverStyle01 } from "../../styles/theme";

const CategorySwiper = () => {
  const [selectedCategory, setSeletedCategory] = useState("전체분야");
  const categoies = [
    "전체분야",
    "그래픽 디자인",
    "브랜딩/편집",
    "영상/모션그래픽",
    "UI/UX",
    "일러스트레이션",
    "캐릭터 디자인",
    "디지털 아트",
    "타이포그래피",
    "포토그래피",
  ];
  const onSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;
    if (e.currentTarget.name) {
      setSeletedCategory(button.name);
    }
  };
  return (
    <CategorySwiperContainer className="category-swiper-container">
      <Swiper
        slidesPerView={7}
        slidesPerGroup={1}
        navigation={{
          nextEl: ".category-swiper-next-btn",
          prevEl: ".category-swiper-prev-btn",
        }}
        modules={[Navigation]}
        className="category-swiper"
      >
        {categoies.map((category, idx) => (
          <SwiperSlide key={category}>
            <button
              className={`category-swiper-name ${selectedCategory === category && "active"}`}
              type="button"
              name={category}
              onClick={onSelect}
            >
              {category}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="category-swiper-prev-btn">
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </div>
      <div className="category-swiper-next-btn">
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </div>
    </CategorySwiperContainer>
  );
};

export default CategorySwiper;

const CategorySwiperContainer = styled.div`
  width: 50%;
  position: relative;
  .category-swiper-name {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #4e5454;
    display: block;
    text-align: center;
    padding: 5px 10px;
    border-radius: 3px;
    margin: 0 auto;
    cursor: pointer;
  }
  .swiper-slide {
    text-align: center;
  }
  .category-swiper-name.active {
    background-color: #f6f9f9;
  }
  .category-swiper {
  }
  .category-swiper-prev-btn {
    left: -30px;
    span {
      padding-left: 5px;
    }
  }
  .category-swiper-next-btn {
    right: -25px;
  }
  .category-swiper-next-btn,
  .category-swiper-prev-btn {
    position: absolute;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border: 1px solid #f0f5f5;
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
    top: -7px;
    background-color: white;
    z-index: 999;
    ${hoverStyle01}
  }

  .material-symbols-outlined {
    font-size: 15px;
  }
`;
