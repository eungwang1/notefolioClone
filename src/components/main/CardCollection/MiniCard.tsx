import React from "react";
import styled from "styled-components";
import { speakerIcon } from "../../../assets";
import { hoverStyle01 } from "../../../styles/theme";
import ProgressiveImg from "../../common/ProgressiveImg";
interface MiniCardProps {
  image?: string;
  title?: string;
  name?: string;
  type?: "normal" | "primary";
}
const MiniCard: React.FC<MiniCardProps> = ({ image, title, name, type = "normal" }) => {
  return (
    <MiniCardContainer>
      <div className={`minicard-item ${type}`}>
        <div className={`minicard-img-wrapper ${type}`}>
          <ProgressiveImg
            className={`minicard-img`}
            src={image as string}
            alt="logo"
            width={48}
            height={48}
            borderRadius="5px"
            placeholderSrc="/images/placeholderImg"
          />
        </div>
        <div className="minicard-info-wrap">
          <div className={`minicard-info-title ${type}`}>{title}</div>
          <div className="minicard-info-name">{name}</div>
        </div>
        <div className={`minicard-img-wrapper-right ${type}`}>
          <img className={`minicard-img`} src={speakerIcon} alt="logo" width={48} height={48} />
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
  margin-bottom: 12px;
  .minicard-item {
    padding: 3.5px 16px;
    border: 1px solid #f0f5f5;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 6px;
    width: 100%;
    cursor: pointer;
    ${hoverStyle01}
  }
  .minicard-img-wrapper {
    width: 48px;
    height: 48px;
    background-color: #f1f1f1;
  }
  .minicard-img-wrapper,
  .minicard-img-wrapper-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 8px 0px;
  }
  .minicard-img {
    object-fit: cover;
    border-radius: 4px;
  }
  .minicard-info-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 90%;
    height: 100%;
    padding: 8px 0;
    margin-left: 16px;
  }
  .minicard-info-title {
    display: block;
    font-style: normal;
    align-items: center;
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: ${(props) => props.theme.palette.DarkGray01};
  }
  .minicard-info-name {
    display: block;
    font-style: normal;
    align-items: center;
    font-weight: 400;
    font-size: 13px;
    line-height: 30px;
    color: ${(props) => props.theme.palette.Gray02};
  }
  .primary {
    border-color: ${(props) => props.theme.palette.SkyBlue01};
    background-color: ${(props) => props.theme.palette.SkyBlue02};
  }
  .minicard-img-wrapper.primary {
    display: none;
  }
  .minicard-img-wrapper-right {
    display: none;
  }
  .minicard-img-wrapper-right.primary {
    display: block;
  }
  .minicard-info-title.primary {
    color: #11a5ad;
  }
`;
