import React, { useRef } from "react";
import styled from "styled-components";
import useNotefolio from "../../lib/useNotefolio";
import { useAppSelector } from "../../store/hook";
import NotefoiloCard from "./NotefoiloCard";
import useInfinityScroll from "../../lib/useInfinityScroll";

const Notefolio = () => {
  const { notefolioList, getNotefolioListLoading } = useAppSelector((state) => state.notefolioSlice);
  const { onLoadNotefolioList } = useNotefolio();
  const target = useRef<HTMLDivElement>(null);
  useInfinityScroll({
    target,
    targetArray: notefolioList,
    fetchAction: onLoadNotefolioList,
    threshold: 0.5,
    rootMargin: "400px 0px",
  });
  return (
    <NotefolioContainer>
      <div className="notefolio-works-wrapper">
        {notefolioList?.map((item, idx) => (
          <NotefoiloCard item={item} idx={idx} key={item.id + idx} />
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
  padding: 24px;
  width: 100vw;
  .notefolio-works-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 24px 0 0 0;
  }
`;
