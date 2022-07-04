import { useRouter } from "next/router";
import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import { createSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
interface ISearch {
  size?: "middle" | "large";
  className?: string;
  onAfterSearch?: () => void;
}
const SearchInput: React.FC<ISearch> = ({ size = "middle", className, onAfterSearch }) => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  };
  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push({
        pathname: "/search",
        query: { search: value },
      });

      onAfterSearch && onAfterSearch();
    }
  };
  return (
    <SearchCotainer size={size} className={className}>
      <input
        className="search-input-input"
        placeholder="크리에이티브 검색"
        type="text"
        value={value}
        onChange={onInputChange}
        onKeyDown={onEnterPress}
      />
      <span className="material-symbols-outlined search">search</span>
    </SearchCotainer>
  );
};

export default SearchInput;

const SearchCotainer = styled.div<ISearch>`
  max-width: 280px;
  width: 100%;
  height: 33px;
  display: flex;
  position: relative;
  .search {
    position: absolute;
    fill: #444444;
    top: 8px;
    left: 12px;
    font-size: 18px;
  }
  input {
    width: 100%;
    border: solid 1px #e4e8e8;
    border-radius: 19px;
    background-color: ${(props) => props.theme.palette.Gray05};
    padding: 8px 40px;
  }
  ${(props) =>
    props.size === "large" &&
    css`
      max-width: none;
      width: 90%;
      height: 50px;

      .search {
        font-size: 35px;
        line-height: 45px;
        left: 20px;
        top: 4px;
      }
      input {
        padding: 20px 70px;
        border-radius: 50px;
        font-size: 18px;
      }
    `}
`;
