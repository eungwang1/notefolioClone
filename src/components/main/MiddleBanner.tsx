import React, { useMemo } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";
import { useAppSelector } from "@store/hook";
import { useMedia } from "@lib/useMediaQuery";
import { responsiveAcademyItemCount } from "@lib/responsiveValueList";
import { media } from "@styles/theme";
import AcademyCard from "./CardCollection/AcademyCard";

interface MiddleBannerProps {
  title?: string;
  content?: string;
  linktitle?: string;
  link?: string;
}
const MiddleBanner: React.FC<MiddleBannerProps> = ({
  title = "노트폴리오 아카데미",
  content = "취미부터 실무까지 현업 창작자와 함께하는 워크샵으로 실력을 키워보세요.",
  link = "/",
  linktitle = "아카데미 바로가기 >",
}) => {
  const { academyList } = useAppSelector((state) => state.notefolioSlice);
  const { isMobile, isPcMiddle, isTablet } = useMedia();
  const slidesPerView = useMemo(() => {
    if (isMobile) {
      return responsiveAcademyItemCount.ml;
    }
    if (isTablet) {
      return responsiveAcademyItemCount.tb;
    }
    return responsiveAcademyItemCount.pcs;
  }, [isMobile, isTablet]);

  return (
    <MiddleBannerContainer>
      <div className="middle-banner-wrapper">
        <div className="middle-banner-explain">
          <div className="middle-banner-explain-title">{title}</div>
          <div className="middle-banner-explain-content">{content}</div>
          <Link href={link} className="middle-banner-link">
            {linktitle}
          </Link>
        </div>
        <div className="middle-banner-contents">
          <Swiper
            slidesPerView={slidesPerView}
            slidesPerGroup={2}
            navigation={{
              nextEl: ".swiper-next-btn",
              prevEl: ".swiper-prev-btn",
            }}
            modules={[Navigation]}
            className="middle-banner-mySwiper"
          >
            {academyList.map((item, idx) => (
              <SwiperSlide className="middle-banner-swiper-slide" key={idx}>
                <AcademyCard item={item} key={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </MiddleBannerContainer>
  );
};

export default MiddleBanner;

const MiddleBannerContainer = styled.div`
  width: 100%;
  margin-top: -20px;
  margin-bottom: 30px;

  background-color: #161c1c;
  .middle-banner-swiper-slide {
    :not(:first-child) {
      margin-left: 20px;
    }
  }

  .middle-banner-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    padding: 32px 45px 32px 45px;
    color: white;
  }

  .middle-banner-explain {
    width: calc(25% - 20px);
    padding: 24px 0;
  }
  .middle-banner-contents {
    width: calc(75% + 20px);
    height: 100%;
  }
  .middle-banner-explain-title {
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
  }
  .middle-banner-explain-content {
    color: white;
    margin-top: 8px;
    word-break: keep-all;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .middle-banner-link {
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    display: block;
    color: #1ecad3;
    margin-top: 10px;
  }
  ${media.tb} {
    .middle-banner-wrapper {
      flex-direction: column;
    }
    .middle-banner-explain,
    .middle-banner-contents {
      width: 100%;
    }
  }
`;
