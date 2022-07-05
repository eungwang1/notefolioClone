import React from "react";
import styled from "styled-components";
import { useMedia } from "@lib/useMediaQuery";
import { media } from "@styles/theme";
import CustomDropdown from "@components/common/CustomDropdown";
import CategorySwiper from "./CategorySwiper";

const Category: React.FC = () => {
  const { isTablet } = useMedia();
  const dropdownItem = [
    {
      value: "노트폴리오 픽",
      googleIcon: "bookmark",
    },
    { value: "추천순으로 보기", googleIcon: "favorite" },
    { value: "최신순으로 보기", googleIcon: "schedule" },
  ];
  return (
    <CategoryContainer className="category-container">
      <div className="category-pc-wrapper">
        <CustomDropdown items={dropdownItem} />
        {!isTablet && <CategorySwiper />}
      </div>
      {isTablet && <CategorySwiper />}
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  .category-pc-wrapper {
    padding: 0 34px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  ${media.tb} {
    .category-pc-wrapper {
      padding-bottom: 24px;
      border-bottom: solid 1px #f1f1f1;
    }
  }
`;
