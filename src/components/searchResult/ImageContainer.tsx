import React, { useState } from "react";
import Image from "next/image";
import imageContainer from "../../../public/images/imageContainer.png";
import user from "../../../public/images/user.png";
import { STRING_CONSTANTS } from "../constants/StringConstants";
import TextMessage from "../common/TextMessage";
import astutoCloudLogo from "../../../public/images/CloudLogo.jpeg";
import chevron from "../../../public/images/chevronDown.svg";
import Collapsible from "react-collapsible";
import { IoCopyOutline } from "react-icons/io5";

const mainContainer = {
  display: "inline-block",
};
const imageContainers = {
  position: "relative",
  top: "5px",
  left: "5px",
  zIndex: "1",
};
const searchResultContainer = {
  padding: "20px",
  width: "85%",
};
const searchStyle = {
  height: "40px",
  padding: "10px 16px 20px",
  fontSize: "16px",
  background: "#CCD8E4",
  borderRadius: "12px",
  display: "flex",
  columnGap: "20px",
  alignItems: "center",
};
const columnContainer: any = {
  display: "flex",
  alignItems: "center",
};
const dashBoardStyle = {
  width: "100%",
};
const line = {
  flex: 1,
  borderBottom: "1px solid black",
};
const textStyle = {
  padding: "20px",
  fontFamily: "sans-serif",
};

const imageWrapper = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

const iconsContainer = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0 20px",
  color: "green",
  fontFamily: "sans-serif",
  fontSize: "12px",
};

const leftIcon = {
  display: "flex",
  alignItems: "center",
  columnGap: "8px",
};
const prototypeStyle = {
  color: "red",
  textDecoration: "underline",
  cursor: "pointer",
};

const imageStyle = {
  borderRadius: "5px",
};

const logoContainer = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  padding: "0 20px",
};
const collapsible = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ImageContainer = () => {
  const {
    USER_ICON,
    LOGO,
    CHEVRON_ICON,
    INNER_TEXT: { EC2_COSTS, DASHBOARD, PRODUCTION_RESULT, PIE_CHART },
  } = STRING_CONSTANTS;
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 10, 200));
    setIsZoomedIn(true);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 10, 10));
    setIsZoomedIn(false);
  };

  const searchBtnHandler = () => {
    window.location.href = "/";
  };

  return (
    <div style={imageWrapper}>
      <div style={searchResultContainer}>
        <div style={searchStyle}>
          <Image src={user} alt={USER_ICON} width={20} height={20} />
          <TextMessage text={EC2_COSTS} />
        </div>
      </div>
      <div style={logoContainer}>
        <Image
          style={imageStyle}
          src={astutoCloudLogo}
          alt={LOGO}
          width={25}
          height={25}
        />
        <TextMessage text={PRODUCTION_RESULT} textStyles={textStyle} />
      </div>
      <Collapsible
        trigger={
          <div style={dashBoardStyle}>
            <div style={columnContainer}>
              <TextMessage text={DASHBOARD} />
              <span style={line}></span>
              <Image src={chevron} alt={CHEVRON_ICON} width={20} height={20} />
            </div>
          </div>
        }
        transitionTime={200}
        open={true}
        style={collapsible}
        triggerDisabled={true}
      >
        <div style={mainContainer}>
          <div style={imageContainers}>
            <button onClick={handleZoomIn} disabled={isZoomedIn}>
              +
            </button>
            <button onClick={handleZoomOut} disabled={!isZoomedIn}>
              -
            </button>
          </div>
          <div>
            <Image
              src={imageContainer}
              alt="abc"
              width={(700 * zoomLevel) / 100}
              height={(500 * zoomLevel) / 100}
            />
          </div>
        </div>
        <div style={iconsContainer}>
          <div style={leftIcon}>
            <IoCopyOutline />
            <p>Add to Dashboard</p>
          </div>

          <div style={prototypeStyle} onClick={searchBtnHandler}>
            End Prototype
          </div>
        </div>
      </Collapsible>
      <div style={dashBoardStyle}>
        <div style={columnContainer}>
          <TextMessage text={DASHBOARD} />
          <span style={line}></span>
          <Image src={chevron} alt={CHEVRON_ICON} width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
