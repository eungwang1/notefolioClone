import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { motion } from "framer-motion";
import { hoverStyle01, media } from "@styles/theme";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { onSelectCategory } from "@slices/notefolioSlice";
import { useMedia } from "@lib/useMediaQuery";
import { responsiveCategorySwiperCount } from "@lib/responsiveValueList";
import { useRouter } from "next/router";
import { ICategory } from "@customTypes/notefolio";

const CategorySwiper: React.FC = () => {
  const { categories } = useAppSelector((state) => state.notefolioSlice);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { category } = router.query;
  const { isMobile, isMobileSmall, isPcMiddle, isTablet } = useMedia();
  const swiperCount = useMemo(() => {
    if (isMobileSmall) return responsiveCategorySwiperCount.ms;
    if (isMobile) return responsiveCategorySwiperCount.ml;
    if (isTablet) return responsiveCategorySwiperCount.tb;
    if (isPcMiddle) return responsiveCategorySwiperCount.pcs;
    return responsiveCategorySwiperCount.tb;
  }, [isMobile, isMobileSmall, isPcMiddle, isTablet]);

  const isActive = useCallback(
    (el: ICategory) => {
      return category + "" === el.code || (!category && el.code === "");
    },
    [category]
  );
  const onSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;
    if (button.innerText) {
      dispatch(onSelectCategory(button.innerText));
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          category: button.name,
        },
      });
    }
  };
  return (
    <CategorySwiperContainer className="category-swiper-container">
      <Swiper
        slidesPerView={swiperCount}
        slidesPerGroup={1}
        navigation={{
          nextEl: ".category-swiper-next-btn",
          prevEl: ".category-swiper-prev-btn",
        }}
        modules={[Navigation]}
        className="category-swiper"
      >
        {categories.map((el) => (
          <SwiperSlide key={el.title}>
            <button
              className={`category-swiper-name ${isActive(el) && "active"}`}
              disabled={isActive(el)}
              type="button"
              name={el.code}
              onClick={onSelect}
            >
              {isActive(el) && (
                <motion.span
                  className="category-swiper-name-swiper"
                  layoutId="category-swiper-name-swiper"
                ></motion.span>
              )}
              <span className="category-swiper-name-title">{el.title}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="category-swiper-prev-btn">
        <span className="material-symbols-outlined not-draggable">arrow_back_ios</span>
      </div>
      <div className="category-swiper-next-btn">
        <span className="material-symbols-outlined not-draggable">arrow_forward_ios</span>
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
    padding: 8px 10px;
    border-radius: 3px;
    margin: 0 auto;
    cursor: pointer;
    position: relative;
    z-index: 3;
  }
  .category-swiper-name-swiper {
    /* background-color: ${(props) => props.theme.palette.Gray05}; */
    background-color: ${(props) => props.theme.palette.SkyBlue02};
    position: absolute;
    border-radius: 3px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .category-swiper-name-title {
    position: relative;
  }
  .swiper-slide {
    text-align: center;
  }
  .category-swiper-name.active {
    font-weight: 700;
    color: ${(props) => props.theme.palette.Mint02};
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
    z-index: 100;
    ${hoverStyle01}
    ${media.tb} {
      display: none;
    }
  }

  .material-symbols-outlined {
    font-size: 15px;
  }
  ${media.tb} {
    width: 100%;
    padding-top: 24px;
  }
`;
