import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { NpbadgeIcon } from "@assets/index";
import { INotefolio } from "@customTypes/notefolio";
import { onFilterCurrentNoteFolio, onTogglePdfModalState } from "@slices/notefolioSlice";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { media, scalingKeyframes } from "@styles/theme";
import { postLike } from "@actions/notefolioAction";
import useNotefolio from "@lib/useNotefolio";

interface NotefoiloCardProps {
  item: INotefolio;
  idx: number;
}
const NotefoiloCard: React.FC<NotefoiloCardProps> = ({ item, idx }) => {
  const dispatch = useAppDispatch();
  const { onLoadNotefolio } = useNotefolio();
  const { me, currentNotefolio } = useAppSelector((state) => state.notefolioSlice);
  const [notefolio, setNotefolio] = useState<INotefolio>(item);
  const [saveState, setSaveState] = useState(false);
  const onOpenModal = (id: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(onTogglePdfModalState(true));
    dispatch(onFilterCurrentNoteFolio(id));
  };
  useEffect(() => {
    if (currentNotefolio?.id === item.id)
      onLoadNotefolio(notefolio?.id as string).then((el) => setNotefolio(el.payload));
  }, []);
  const likedState = useMemo(() => {
    return notefolio.likedUserList.filter((el) => el.username === me.username).length >= 1;
  }, [notefolio]);

  const onItemClick = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const node = e.target as Element;
    if (node.className.includes("heart")) {
      await dispatch(postLike(item.id as string));
      onLoadNotefolio(item.id as string).then((el) => setNotefolio(el.payload));
      return;
    }
    if (node.className.includes("folder")) {
      if (node.className.includes("active")) {
        setSaveState(false);
        alert("저장이 취소되었습니다.");
      } else {
        setSaveState(true);
        alert("저장되었습니다.");
      }
      return;
    } else {
      onOpenModal(item.id);
    }
  };
  return (
    <NotefoiloCardContainer>
      <div className="notefolio-work-item-block image-hover" onClick={onOpenModal(item.id)}>
        <div>
          <Image
            className="notefolio-work-item-thumbnail"
            src={item.contentimg}
            alt="work"
            width={100}
            height={100}
            layout="responsive"
            blurDataURL="https://via.placeholder.com/480"
            placeholder="blur"
            priority={true}
          />
        </div>
        <div className="notefolio-work-item-hover-background"></div>
        <div className="notefolio-npbadge">
          <NpbadgeIcon />
        </div>
      </div>

      <div className="notefolio-work-item-hover-content" onClick={onItemClick}>
        <div className="notefolio-work-item-hover-title">{item.title}</div>
        <div className="notefolio-work-item-hover-icon">
          <span className={`material-symbols-outlined heart not-draggable ${likedState && "active"}`}>
            favorite
          </span>
          <span className={`material-symbols-outlined folder not-draggable ${saveState && "active"}`}>
            create_new_folder
          </span>
        </div>
      </div>

      <div className="notefolio-user-info-container">
        <div className="notefolio-user-profile-group">
          <div className="notefolio-user-profile-img-wrapper">
            <Image
              className="notefolio-user-profile-img"
              src={item.profile}
              alt="profile"
              width={1}
              height={1}
              layout="responsive"
              blurDataURL="https://via.placeholder.com/480"
              placeholder="blur"
            />
          </div>
          <span className="notefolio-user-profile-username">{item.username}</span>
        </div>
        <div className="notefolio-work-info-group">
          <div className="notefolio-work-info-view">
            <span className="material-symbols-outlined">visibility</span>
            <span className="notefolio-view-count">{item.viewcount}</span>
          </div>
          <div className="notefolio-work-info-view">
            <span className="material-symbols-outlined">favorite</span>
            <span className="notefolio-like-count">{notefolio.likedUserList.length}</span>
          </div>
        </div>
      </div>
    </NotefoiloCardContainer>
  );
};

export default NotefoiloCard;

const NotefoiloCardContainer = styled.div`
  overflow: hidden;
  :hover {
    .notefolio-work-item-hover-content {
      transition: transform, opacity 0.3s ease-out;
      transform: translateY(-80px);
      opacity: 1;
    }
    .notefolio-npbadge {
      transition: transform 0.3s ease-out;
      transform: translateY(100px);
    }
    .notefolio-work-item-hover-background {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
  display: flex;
  flex-direction: column;
  position: relative;
  width: calc(20% - 24px);
  margin: 0 12px 48px 10px;
  cursor: pointer;
  ${media.custom(1340)} {
    width: calc(25% - 24px);
  }
  ${media.tb} {
    width: calc(33.3% - 24px);
  }
  ${media.lm} {
    width: calc(50% - 24px);
  }
  ${media.sm} {
    width: calc(100% - 24px);
  }
  .notefolio-work-item-thumbnail-block {
    width: 100%;
  }
  .image-hover {
    position: relative;
    :hover {
      .notefolio-npbadge {
        transition: transform 0.3s ease-out;
        transform: translateY(100px);
      }
      .notefolio-work-item-hover-background {
        opacity: 1;
        transition: opacity 0.3s;
      }
    }
  }
  .notefolio-work-item-hover-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    color: white;
    font-weight: 600;
    padding: 10px 0px;
    width: 100%;
    bottom: -50px;
    opacity: 0;
    .heart.active {
      color: red;
      animation: ${scalingKeyframes(1.2)} 0.5s;
    }
    .folder.active {
      color: ${(props) => props.theme.palette.Mint01};
    }
  }
  .notefolio-work-item-hover-background {
    width: 100%;
    position: absolute;
    height: 25%;
    bottom: 0;
    border-radius: 5px;
    opacity: 0;
    background: linear-gradient(to bottom, transparent 0%, ${(props) => props.theme.palette.DarkGray01} 120%);
  }
  .notefolio-work-item-hover-title {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: 1.8;
    overflow: hidden;
    padding: 0 10px;
    width: 70%;
  }

  .notefolio-work-item-hover-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    span {
      font-size: 24px;
    }
  }
  .notefolio-work-item-block {
    width: 100%;
    background-color: #f1f1f1;
    overflow: hidden;
  }
  .notefolio-work-item-thumbnail {
    object-fit: cover;
    border-radius: 5px;
  }
  .notefolio-user-info-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  .notefolio-user-profile-group {
    display: flex;
    flex: 2;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
  .notefolio-user-profile-img {
    border-radius: 50%;
  }
  .notefolio-user-profile-img-wrapper {
    background-color: #f1f1f1;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  .notefolio-user-profile-username {
    margin-left: 6px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    max-width: 180px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    align-items: center;
  }
  .notefolio-work-info-group {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    align-items: center;
    color: #7c8484;
    margin-left: 2px;
  }
  .notefolio-work-info-view {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
  }
  .material-symbols-outlined,
  .material-symbols-outlined {
    font-size: 15px;
    margin-right: 3px;
  }
  .notefolio-npbadge {
    position: absolute;
    top: -100px;
    right: 5%;
  }
  .notefolio-work-item-thumbnail {
    border-radius: 5px;
  }

  /* .heart,
  .folder {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  } */

  ${media.tb} {
    .notefolio-work-item-hover-content {
      transition: transform 0.3s ease-out;
      transform: translateY(-80px);
      opacity: 1;
    }
    .notefolio-npbadge {
      transition: transform 0.3s ease-out;
      transform: translateY(100px);
    }
    .notefolio-work-item-hover-background {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
`;
