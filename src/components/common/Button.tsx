import React, { useState } from 'react';
import Image from 'next/image';
import ArrowImage from '../../../public/images/rightArrow.png';

const defaultBtnStyles = {
    display: "flex",
    height: "58px",
    flexBasis: "calc(50% - 5px)",
    padding: "10px 20px",
    fontSize: "14px",
    border: "grey 1px solid",
    borderRadius: "12px",
    cursor: "pointer"
};

const Button = ({ text, btnStyles = defaultBtnStyles, btnHandler }: any) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonStyleWithHover = {
        ...btnStyles,
        backgroundColor: isHovered ? "#E7F5FB" : btnStyles.backgroundColor
    };

    return (
        <button
            style={buttonStyleWithHover}
            onClick={btnHandler}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {text}
            {isHovered && <Image src={ArrowImage} alt="arrow" width={15} height={15} style={{ marginLeft: '20px', filter: 'brightness(150%)', color: 'red' }} />}
        </button>
    );
};

export default Button;