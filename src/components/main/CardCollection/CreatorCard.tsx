import React from "react";
import styled from "styled-components";
import { hoverStyle01 } from "../../../styles/theme";
import ProgressiveImg from "../../common/ProgressiveImg";
interface CreatorCardProps {
  coverImage?: string[];
  profileImage?: string;
  username?: string;
  category?: string;
}
const CreatorCard: React.FC<CreatorCardProps> = ({ coverImage, profileImage, username, category }) => {
  return (
    <CreatorCardContainer>
      <div className="card-covers">
        <div className="card-cover">
          {coverImage && coverImage.length >= 2 && (
            <ProgressiveImg src={coverImage[0]} alt="card" width="100%" height="auto" />
          )}
        </div>
        <div className="card-cover">
          {coverImage && coverImage.length >= 2 && (
            <ProgressiveImg src={coverImage[1]} alt="card" width="100%" height="auto" />
          )}
        </div>
      </div>
      <div className="card-profile">
        <div className="card-point-cursor">
          <ProgressiveImg src={profileImage as string} alt="profileImage" width="100%" height="auto" />
        </div>
      </div>
      <div className="card-user-info">
        <div className="card-user-name">{username}</div>
        <div className="card-user-category">{category}</div>
        <div className="card-follow-btn">팔로우</div>
      </div>
    </CreatorCardContainer>
  );
};

export default CreatorCard;

const CreatorCardContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;
  margin-bottom: 5px;
  border: 1px solid #f0f5f5;
  box-sizing: border-box;
  .card-covers {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .card-cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 4px;
    img {
      width: 100%;
      height: 153.91px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      background-color: #f1f1f1;
      border-radius: 6px;
      position: relative;
    }
  }
  .card-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-point-cursor {
    width: 64px;
    height: 64px;
    top: -40px;
    border: solid 3px white;
    position: relative;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .card-user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: -38px;
  }
  .card-user-name {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 4px;
    font-weight: 700;
    line-height: 19px;
    align-items: center;
    color: ${(props) => props.theme.palette.DarkGray01};
  }
  .card-user-category {
    font-stretch: normal;
    font-style: normal;
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    align-items: center;
    text-align: center;
    color: #7c8484;
  }
  .card-follow-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 74px;
    height: 40px;
    transition: 0.1s all;
    cursor: pointer;
    align-self: center;
    margin-top: 24px;
    border: 1px solid #e4e8e8;
    box-sizing: border-box;
    border-radius: 20px;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${(props) => props.theme.palette.DarkGray01};
    ${hoverStyle01}
  }
`;
