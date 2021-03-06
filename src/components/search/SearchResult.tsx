import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
interface SearchResultProps {}
const SearchResult: React.FC<SearchResultProps> = () => {
  const router = useRouter();
  const searchValue = router.query.search;

  return (
    <SearchResultContainer>
      <span className="search-result-bold">{`'${searchValue}'`}</span>
      <span>에 대한 검색 결과입니다.</span>
    </SearchResultContainer>
  );
};

export default SearchResult;

const SearchResultContainer = styled.div`
  padding: 50px 0 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  .search-result-bold {
    font-weight: 800;
  }
`;
