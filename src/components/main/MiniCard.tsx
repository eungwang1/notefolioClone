import React from "react";
import styled from "styled-components";
interface MiniCardProps {
  image?: string;
  title?: string;
  name?: string;
}
const MiniCard: React.FC<MiniCardProps> = ({ image, title, name }) => {
  return (
    <MiniCardContainer>
      <div className="minicard-item">
        <div className="minicard-img-wrapper">
          <img className="minicard-img" src={image} alt="logo" width={48} height={48} />
        </div>
        <div className="minicard-info-wrap">
          <div className="minicard-info-title">{title}</div>
          <div className="minicard-info-name">{name}</div>
        </div>
      </div>
    </MiniCardContainer>
  );
};

export default MiniCard;

const MiniCardContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid #f0f5f5;
  margin-bottom: 12px;
  .minicard-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 6px;
    width: 100%;
    cursor: pointer;
  }
  .minicard-img-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 8px 16px;
  }
  .minicard-img {
    object-fit: cover;
    border-radius: 4px;
  }
  .minicard-info-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    padding: 8px 0;
  }
  .minicard-info-title {
    display: block;
    font-style: normal;
    align-items: center;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 210px;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #2c3030;
  }
  .minicard-info-name {
    display: block;
    font-style: normal;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 210px;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #4e5454;
  }
`;
