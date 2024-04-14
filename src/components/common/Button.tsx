import React, { useState } from "react";
import Image from "next/image";
import ArrowImage from "../../../public/images/rightArrow.png";

const defaultBtnStyles = {
  display: "flex",
  height: "58px",
  flexBasis: "calc(50% - 5px)",
  padding: "10px 20px",
  fontSize: "14px",
  border: "grey 1px solid",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const Button = ({
  text,
  btnStyles = defaultBtnStyles,
  btnHandler,
  disabled,
}: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyleWithHover = (disabled: boolean) => {
    return {
      ...btnStyles,
      backgroundColor: isHovered ? "#C2E6F7" : btnStyles.backgroundColor,
    };
  };

  return (
    <button
      style={buttonStyleWithHover(disabled)}
      onClick={btnHandler}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      {isHovered && (
        <Image
          src={ArrowImage}
          alt="arrow"
          width={15}
          height={15}
          style={{
            marginLeft: "20px",
            filter: "brightness(150%)",
            color: "red",
          }}
        />
      )}
    </button>
  );
};

export default Button;
