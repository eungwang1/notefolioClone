import React, { useMemo, useRef } from "react";
import styled from "styled-components";
import useNotefolio from "../../lib/useNotefolio";
import { useAppSelector } from "../../store/hook";
import useInfinityScroll from "../../lib/useInfinityScroll";
import MiddleBanner from "./MiddleBanner";
import { useMedia } from "../../lib/useMediaQuery";
import { responsiveSliceCount } from "../../lib/responsiveValueList";
import { useSearchParams } from "react-router-dom";
import NotefoiloCard from "./CardCollection/NotefoiloCard";
import shortid from "shortid";
const Notefolio: React.FC = () => {
  const { notefolioList, getNotefolioListLoading } = useAppSelector((state) => state.notefolioSlice);
  const [searchParms] = useSearchParams();
  const searchValue = searchParms.get("search");
  const category = searchParms.get("category");
  const sort = searchParms.get("sort");
  const { onLoadNotefolioList } = useNotefolio();
  const target = useRef<HTMLDivElement>(null);
  const { isTablet, isMobile, isMobileSmall, isPcMiddle } = useMedia();

  useInfinityScroll({
    target,
    targetArray: notefolioList,
    fetchAction: onLoadNotefolioList,
    threshold: 0.5,
    rootMargin: "300px 0px",
    sort: sort as string,
    searchValue: searchValue as string,
    category: category as string,
  });

  const sliceCount = useMemo(() => {
    if (isMobileSmall) return responsiveSliceCount.ms;
    if (isMobile) return responsiveSliceCount.ml;
    if (isTablet) return responsiveSliceCount.tb;
    if (isPcMiddle) return responsiveSliceCount.pcs;
    return responsiveSliceCount.pc;
  }, [isMobileSmall, isMobile, isTablet, isPcMiddle]);

  return (
    <NotefolioContainer>
      <div className="notefolio-works-wrapper">
        {notefolioList?.slice(0, sliceCount).map((item, idx) => (
          <NotefoiloCard item={item} idx={idx} key={shortid.generate()} />
        ))}
      </div>
      {notefolioList.length >= 1 && <MiddleBanner />}
      <div className="notefolio-works-wrapper">
        {notefolioList?.slice(sliceCount).map((item, idx) => (
          <NotefoiloCard item={item} idx={idx} key={shortid.generate()} />
        ))}
      </div>
      <div ref={target} className="Loading">
        {getNotefolioListLoading && "Loading..."}
      </div>
    </NotefolioContainer>
  );
};

export default Notefolio;

const NotefolioContainer = styled.div`
  width: 100vw;
  .notefolio-works-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 24px 18px;
  }
`;
