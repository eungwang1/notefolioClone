import React from "react";
import styled from "styled-components";
import { npbadgeIcon } from "../../assets";
import { INotefolio } from "../../customTypes/notefolio";
import useNotefolio from "../../lib/useNotefolio";
import { onTogglePdfModalState } from "../../slices/notefolioSlice";
import { useAppDispatch } from "../../store/hook";
import { hoverStyle01, hoverStyle04, media } from "../../styles/theme";
import ProgressiveImg from "../common/ProgressiveImg";
interface NotefoiloCardProps {
  item: INotefolio;
  idx: number;
}
const NotefoiloCard: React.FC<NotefoiloCardProps> = ({ item, idx }) => {
  const dispatch = useAppDispatch();
  const { onLoadNotefolio } = useNotefolio();
  const onOpenModal = (id: string) => {
    dispatch(onTogglePdfModalState(true));
    onLoadNotefolio(id);
  };
  return (
    <NotefoiloCardContainer onClick={() => onOpenModal(item.id)}>
      <div className="notefolio-work-item-block image-hover">
        <ProgressiveImg
          className="notefolio-work-item-thumbnail"
          src={item.contentimg}
          alt="work"
          width="100%"
          height="auto"
          placeholderSrc="/images/placeholderImg.png"
          borderRadius="5px"
        />
        <div className="notefolio-npbadge">
          <img width="35" height="auto" src={npbadgeIcon} alt="bedge" />
        </div>
        <div className="notefolio-work-item-hover-content">
          <div className="notefolio-work-item-hover-title">{item.title}</div>
          <div className="notefolio-work-item-hover-icon">
            <span className="material-symbols-outlined heart">favorite</span>
            <span className="material-symbols-outlined folder">create_new_folder</span>
          </div>
        </div>
      </div>
      <div className="notefolio-user-info-container">
        <div className="notefolio-user-profile-group">
          <ProgressiveImg
            className="notefolio-user-profile-img"
            src={item.profile}
            alt="profile"
            width={24}
            height={24}
            borderRadius="50%"
            placeholderSrc="/images/placeholderImg.png"
          />
          <span className="notefolio-user-profile-username">{item.username}</span>
        </div>
        <div className="notefolio-work-info-group">
          <div className="notefolio-work-info-view">
            <span className="material-symbols-outlined">visibility</span>
            <span className="notefolio-view-count">{item.viewcount}</span>
          </div>
          <div className="notefolio-work-info-view">
            <span className="material-symbols-outlined">favorite</span>
            <span className="notefolio-like-count">{item.likecount}</span>
          </div>
        </div>
      </div>
    </NotefoiloCardContainer>
  );
};

export default NotefoiloCard;
const NotefoiloCardContainer = styled.div`
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
    :before {
      content: "";
      display: block;
      position: absolute;
      height: 0%;
      width: 100%;
      bottom: 5px;
      transition: height 0.3s ease-out;
      background: linear-gradient(to bottom, transparent 0%, ${(props) => props.theme.palette.Gray02} 150%);
    }
    :hover:before {
      height: 30%;
    }
    :hover {
      .notefolio-work-item-hover-content {
        transition: transform 0.3s ease-out;
        transform: translateY(-40px);
      }
      .notefolio-npbadge {
        transition: transform 0.3s ease-out;
        transform: translateY(100px);
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
    padding: 0 10px;
    width: 100%;
  }
  .notefolio-work-item-hover-title {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: 1.8;
    overflow: hidden;
    width: 70%;
  }
  .notefolio-work-item-hover-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    .heart:hover {
      ${hoverStyle04}
    }
    .folder:hover {
      ${hoverStyle01}
    }
    span {
      font-size: 24px;
    }
  }
  .notefolio-work-item-block {
    width: 100%;
    height: 100%;
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
`;
