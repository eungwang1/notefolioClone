import { postLike } from "@actions/notefolioAction";
import { INotefolio } from "@customTypes/notefolio";
import useNotefolio from "@lib/useNotefolio";
import { useAppDispatch, useAppSelector } from "@store/hook";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { hoverStyle01, scalingKeyframes } from "../../../styles/theme";
interface IModalSideNavProps {
  downloadLink?: string;
  heartCount?: number;
  onScaleUp?: () => void;
  onScaleDown?: () => void;
}
const ModalSideNav: React.FC<IModalSideNavProps> = ({ downloadLink, onScaleDown, onScaleUp }) => {
  const dispatch = useAppDispatch();
  const { onLoadNotefolio } = useNotefolio();
  const { me, currentNotefolio } = useAppSelector((state) => state.notefolioSlice);
  const [notefolio, setNotefolio] = useState<INotefolio>(currentNotefolio as INotefolio);
  const likedState = useMemo(() => {
    if (notefolio) {
      return notefolio.likedUserList.filter((el) => el.username === me.username).length >= 1;
    }
  }, [notefolio]);
  useEffect(() => {
    onLoadNotefolio(notefolio?.id as string).then((el) => setNotefolio(el.payload));
  }, []);

  const onToggleHeart = async () => {
    await dispatch(postLike(notefolio?.id as string));
    onLoadNotefolio(notefolio?.id as string).then((el) => setNotefolio(el.payload));
  };
  return (
    <ModalSideNavContainer>
      <div className="modal-side-nav-heart-container">
        <div className="modal-side-nav-heart-wrapper">
          <span
            className={`material-symbols-outlined heart not-draggable ${likedState && "active"}`}
            onClick={onToggleHeart}
          >
            favorite
          </span>
        </div>
        <span className="modal-side-nav-heart-count">{notefolio.likedUserList.length}</span>
      </div>
      <a href={downloadLink} target="_blank" rel="noreferrer">
        <div className="modal-side-nav-download-wrapper">
          <span className="material-symbols-outlined download not-draggable">download</span>
        </div>
      </a>
      <div className="modal-side-nav-zoom-wrapper">
        <span className="material-symbols-outlined zoomin" onClick={onScaleUp}>
          zoom_in
        </span>
      </div>
      <div className="modal-side-nav-zoom-wrapper">
        <span className="material-symbols-outlined zoomout" onClick={onScaleDown}>
          zoom_out
        </span>
      </div>
    </ModalSideNavContainer>
  );
};

export default ModalSideNav;

const ModalSideNavContainer = styled.div`
  position: absolute;
  top: 8%;
  right: -10%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .modal-side-nav-heart-count {
    color: white;
    margin-top: 5px;
    font-weight: 700;
  }

  .modal-side-nav-heart-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .modal-side-nav-heart-wrapper,
  .modal-side-nav-download-wrapper,
  .modal-side-nav-zoom-wrapper {
    border-radius: 50%;
    padding: 11px;
    display: flex;
    justify-content: center;
    align-self: center;
    background-color: white;
    cursor: pointer;
  }
  .download,
  .zoomin,
  .zoomout {
    ${hoverStyle01}
  }

  .heart.active {
    animation: ${scalingKeyframes(1.2)} 0.5s;
    color: red;
  }
`;
