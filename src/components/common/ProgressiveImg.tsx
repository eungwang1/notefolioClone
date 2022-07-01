import React, { HTMLAttributes, useEffect, useState } from "react";
import styled from "styled-components";

interface IProgressiveImgProps extends HTMLAttributes<HTMLImageElement> {
  placeholderSrc?: string;
  src: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  borderRadius?: string;
}
const ProgressiveImg: React.FC<IProgressiveImgProps> = ({ ...props }) => {
  const { placeholderSrc = "/images/placeholderImg.png", src } = props;
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const loadingClassName = placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);
  return (
    <ProgressiveImgContainer {...props} className="progressiveImage-block">
      <img
        src={src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={`progressiveImage ${loadingClassName}`}
      />
    </ProgressiveImgContainer>
  );
};

export default ProgressiveImg;

const ProgressiveImgContainer = styled.div<IProgressiveImgProps>`
  .progressiveImage {
    border-radius: ${(props) => props.borderRadius};
  }
  /* .loading {
    filter: blur(10px);
    clip-path: inset(0);
  }
  .loaded {
    filter: blur(0px);
    transition: filter 0.5s linear;
  } */
`;
