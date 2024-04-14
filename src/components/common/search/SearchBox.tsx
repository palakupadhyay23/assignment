import React from 'react';
import Image from 'next/image';
import ArrowImage from '../../../../public/images/rightArrow.png';
import codeIcon from '../../../../public/images/code.png';
import { STRING_CONSTANTS } from '../constants/StringConstants';

const searchWrapper = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const searchBoxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0",
    width: "100%"
};

const inputStyle = {
    border: "none",
    width: "90%",
    height: "90%",
    marginLeft: "15px",
    outline: "none",
    borderColor: "transparent",
    pointerEvents: "none"
}

const searchStyle = {
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
    height: "52px",
    width: "70%",
    border: "grey 1px solid",
    borderRadius: "15px",
    padding: "0px 10px 0px 0px",
    backgroundColor: "#fff"
};

const SearchBox = () => {
    const {ARROW, CODE_ICON} = STRING_CONSTANTS
    return (
        <div style={searchWrapper}>
                <div style={searchBoxStyle}>
                    <div style={searchStyle}>
                        <input
                            type="text"
                            style={inputStyle}
                            placeholder="Search..."
                            disabled
                        />
                        <Image src={codeIcon} alt={CODE_ICON} width={20} height={20} />
                        <Image src={ArrowImage} alt={ARROW} width={15} height={15} />
                    </div>
                </div>
            </div>
    );
};

export default SearchBox;
