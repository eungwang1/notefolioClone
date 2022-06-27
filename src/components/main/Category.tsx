import React from "react";
import styled from "styled-components";
import { media } from "../../styles/theme";
import CustomDropdown from "../common/CustomDropdown";
import CategorySwiper from "./CategorySwiper";

const Category = () => {
  const dropdownItem = [
    {
      value: "노트폴리오 픽",
      googleIcon: "bookmark",
    },
    { value: "추천순으로 보기", googleIcon: "favorite" },
    { value: "최신순으로 보기", googleIcon: "schedule" },
  ];
  return (
    <CategoryContainer>
      <CustomDropdown items={dropdownItem} />
      <CategorySwiper />
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div`
  padding: 0 34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${media.tb} {
    .category-swiper-container {
      display: none;
    }
  }
`;
