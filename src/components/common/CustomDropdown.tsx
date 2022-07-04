import React, { useRef, useState } from "react";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import styled from "styled-components";
import { hoverStyle01, hoverStyle03 } from "../../styles/theme";
import { useRouter } from "next/router";
interface items {
  value: string;
  googleIcon?: string;
}
interface CustomDropdownProps {
  items: items[];
}
const CustomDropdown: React.FC<CustomDropdownProps> = ({ items }) => {
  const [visible, setVisible] = useState(false);
  const [selectedKey, setSeletedKey] = useState("노트폴리오 픽");
  const sortkey = useRef<string>("");
  const router = useRouter();
  function onSelect({ key }: { key: string }) {
    setSeletedKey(() => key);
    if (key === "추천순으로 보기") {
      sortkey.current = "likecount";
    }
    if (key === "노트폴리오 픽") {
      sortkey.current = "";
    }
    if (key === "최신순으로 보기") {
      sortkey.current = "createdAt";
    }
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        sort: sortkey.current,
      },
    });
    setVisible(false);
  }
  function onVisibleChange(visible: boolean) {
    setVisible(visible);
  }
  const menu = (
    <Menu onSelect={onSelect}>
      {items.map((item) => (
        <StyledMenuItem key={item.value}>
          <span className={`material-symbols-outlined ${selectedKey === item.value && "active"}`}>
            {item.googleIcon}
          </span>
          <span className={`dropdown-item ${selectedKey === item.value && "active"}`}>{item.value}</span>
        </StyledMenuItem>
      ))}
    </Menu>
  );
  return (
    <DropdownContainer>
      <Dropdown trigger={["click"]} overlay={menu} animation="slide-up" onVisibleChange={onVisibleChange}>
        <button className="dropdown-btn">
          <div className="dropdown-bookmark-icon-wrapper">
            <span className="material-symbols-outlined dropdown-bookmark-icon">bookmark</span>
          </div>
          <span>{selectedKey}</span>
          <span className={`material-symbols-outlined ${visible && "rotate"}`}>expand_more</span>
        </button>
      </Dropdown>
    </DropdownContainer>
  );
};

export default CustomDropdown;

const DropdownContainer = styled.div`
  min-width: 180px;
  width: 25%;
  .dropdown-bookmark-icon-wrapper {
    width: 20px;
    height: 20px;
  }
  .dropdown-btn {
    padding: 8px;
    border: 1px solid #e8e8e8;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 0.7;
    gap: 10px;
    border-radius: 5px;
    ${hoverStyle03}
  }
  .dropdown-bookmark-icon {
    line-height: 18px;
  }
  .material-symbols-outlined {
    transition: all 0.3s;
  }
  .material-symbols-outlined.rotate {
    transform: rotate(180deg);
  }
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 8px !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  line-height: 0.7;
  gap: 10px;
  cursor: pointer;
  .material-symbols-outlined {
    font-size: 20px;
  }
  .material-symbols-outlined.active {
    color: #1bcad3;
  }
  .dropdown-item.active {
    color: #1bcad3;
  }
  ${hoverStyle01}
`;
