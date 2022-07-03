import React from "react";
import styled from "styled-components";
import { IAcademy } from "../../../customTypes/notefolio";
interface AcademyCardProps {
  item: IAcademy;
}
const AcademyCard: React.FC<AcademyCardProps> = ({ item }) => {
  return (
    <AcademyCardContainer>
      <div className="academycard-image-block">
        <img width="100%" height="auto" src={item.image} alt={item.title} />
      </div>
      <div className="academycard-info">
        <div className="academycard-info-title">{item.title}</div>
        <div className="academycard-info-content">
          <div className="academycard-info-content-summary">{item.content}</div>
          <button className="academycard-info-content-button">recruit</button>
        </div>
      </div>
    </AcademyCardContainer>
  );
};

export default AcademyCard;

const AcademyCardContainer = styled.div`
  .progressiveImage {
    aspect-ratio: 4 / 3;
  }
  .academycard-info {
    margin-top: 10px;
  }
  .academycard-image-block {
    object-fit: cover;
    background-color: #f1f1f1;
    border-radius: 5px;
    img {
      border-radius: 5px;
    }
  }
  .academycard-info-title {
    font-size: 18px;
    font-weight: 700;
  }
  .academycard-info-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }
  .academycard-info-content-button {
    padding: 5px 10px;
    background-color: ${(props) => props.theme.palette.DarkGray01};
    border-radius: 5px;
    color: white;
    font-size: 12px;
    font-weight: 700;
  }
`;
