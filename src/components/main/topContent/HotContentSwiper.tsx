import React, { useMemo } from "react";
import CreatorCard from "../CardCollection/CreatorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styled from "styled-components";
import { hoverStyle01, media } from "../../../styles/theme";
import { useMedia } from "../../../lib/useMediaQuery";
import { useAppSelector } from "../../../store/hook";
import { responsiveCreatorSwiperCount } from "../../../lib/responsiveValueList";
const HotContentSwiper: React.FC = () => {
  const { creatorList } = useAppSelector((state) => state.notefolioSlice);
  const { isMobile, isTablet, isMobileSmall } = useMedia();
  const slidesPerView = useMemo(() => {
    if (isMobileSmall) return responsiveCreatorSwiperCount.ms;
    if (isMobile) return responsiveCreatorSwiperCount.ml;
    if (isTablet) return responsiveCreatorSwiperCount.tb;
    return responsiveCreatorSwiperCount.pc;
  }, [isMobile, isTablet, isMobileSmall]);
  return (
    <HotContentSwiperContainer>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        navigation={{
          nextEl: ".hotcontent-swiper-next-btn",
          prevEl: ".hotcontent-swiper-prev-btn",
        }}
        modules={[Navigation]}
        className="hotcontent-mySwiper"
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <div className="swiper-title">HOT 크리에이터🔥</div>
        {creatorList.map((card, idx) => (
          <SwiperSlide key={idx}>
            <CreatorCard
              username={card.username}
              category={card.category}
              coverImage={card.coverImage}
              profileImage={card.profileImage}
            />
          </SwiperSlide>
        ))}

        <div className="hotcontent-swiper-prev-btn">
          <span className="material-symbols-outlined not-draggable">arrow_back_ios</span>
        </div>
        <div className="hotcontent-swiper-next-btn">
          <span className="material-symbols-outlined not-draggable">arrow_forward_ios</span>
        </div>
      </Swiper>
    </HotContentSwiperContainer>
  );
};

export default HotContentSwiper;

const HotContentSwiperContainer = styled.div`
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
  .hotcontent-swiper-next-btn {
    right: 20px;
  }
  .hotcontent-swiper-prev-btn {
    right: 40px;
  }
  .hotcontent-swiper-next-btn,
  .hotcontent-swiper-prev-btn {
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
