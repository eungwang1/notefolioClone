import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { hoverStyle01 } from "../../../styles/theme";
interface CreatorCardProps {
  coverImage?: string[];
  profileImage?: string;
  username?: string;
  category?: string;
}
const CreatorCard: React.FC<CreatorCardProps> = ({ coverImage, profileImage, username, category }) => {
  const onFollow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const node = e.target as Element;
    if (node.className === "card-follow-btn") {
      alert("팔로우 하였습니다.");
      node.className += " active";
      node.innerHTML = "팔로잉";
      console.log(node);
    } else {
      alert("팔로우를 취소하였습니다.");
      node.className = "card-follow-btn";
      node.innerHTML = "팔로우";
    }
  };
  return (
    <CreatorCardContainer>
      <div className="card-covers">
        <div className="card-cover">
          {coverImage && coverImage.length >= 2 && (
            <Image
              src={coverImage[0]}
              alt="card"
              width={100}
              height={125}
              layout="responsive"
              blurDataURL="https://via.placeholder.com/480"
              placeholder="blur"
            />
          )}
        </div>
        <div className="card-cover">
          {coverImage && coverImage.length >= 2 && (
            <Image
              src={coverImage[1]}
              alt="card"
              width={100}
              height={125}
              layout="responsive"
              blurDataURL="https://via.placeholder.com/480"
              placeholder="blur"
            />
          )}
        </div>
      </div>
      <div className="card-profile">
        <div className="card-point-cursor">
          <Image
            src={profileImage as string}
            alt="profileImage"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
      <div className="card-user-info">
        <div className="card-user-name">{username}</div>
        <div className="card-user-category">{category}</div>
        <div className="card-follow-btn" onClick={onFollow}>
          팔로우
        </div>
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
    background-color: #f1f1f1;
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
  .card-follow-btn.active {
    color: ${(props) => props.theme.palette.Mint01};
    border-color: ${(props) => props.theme.palette.Mint01};
  }
`;
