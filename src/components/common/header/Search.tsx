import React from "react";
import styled from "styled-components";

const Search: React.FC = () => {
  return (
    <SearchCotainer>
      <input placeholder="크리에이티브 검색" type="text" />
      <span className="material-symbols-outlined">search</span>
    </SearchCotainer>
  );
};

export default Search;

const SearchCotainer = styled.div`
  max-width: 280px;
  width: 100%;
  height: 33px;
  display: flex;
  position: relative;
  .material-symbols-outlined {
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
    background-color: #f7f9f9;
    padding: 8px 40px;
  }
`;
