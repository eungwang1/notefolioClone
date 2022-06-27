import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { url } from "inspector";
import { media } from "../../styles/theme";
const Notefolio = () => {
  const items = Array.from({ length: 30 }, (v, i) => ({
    username: faker.name.middleName(),
    profile: faker.image.avatar(),
    contentimg: faker.image.animals(480, 480),
    viewcount: 5,
    likecount: 5,
  }));
  return (
    <NotefolioContainer>
      <div className="notefolio-works-wrapper">
        {items.map((item, idx) => (
          <div className="notefolio-work-item" key={idx}>
            <div className="notefolio-work-item-block">
              <img
                className="notefolio-work-item-thumbnail"
                src={item.contentimg}
                alt="work"
                width="100%"
                height="auto"
              />
            </div>
            <div className="notefolio-user-info-container">
              <div className="notefolio-user-profile-group">
                <img
                  className="notefolio-user-profile-img"
                  src={item.profile}
                  alt="profile"
                  width={24}
                  height={24}
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
          </div>
        ))}
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
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 24px 0 0 0;
  }
  .notefolio-work-item {
    display: flex;
    flex-direction: column;
    position: relative;
    width: calc(100vw / 6 + 8px);
    margin: 0 12px 48px 10px;
    ${media.custom(1340)} {
      width: calc(100vw / 5 + 19px);
    }
    ${media.tb} {
      width: calc(100vw / 4 + 33px);
    }
    ${media.lm} {
      width: calc(100vw / 3 + 33px);
    }
    ${media.sm} {
      width: calc(100vw / 2 + 18px);
    }
  }
  .notefolio-work-item-block {
    width: 100%;
    height: 100%;
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
`;
