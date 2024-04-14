import Link from "next/link";
import TextMessage from "../common/TextMessage";
import { STRING_CONSTANTS } from "../constants/StringConstants";

const linkStyle = {
  color: "green",
};

const textStyle = {
  fontFamily: "sans-serif",
  lineHeight: "30px",
};

const columnContainer: any = {
  display: "flex",
  alignItems: "center",
};

const line = {
  flex: 1,
  borderBottom: "1px solid black",
};

const boldStyle = {
  fontFamily: "sans-serif",
  fontWeight: "bold",
  lineHeight: "30px",
};

const areasContainer = {
  border: "green 2px solid",
  borderRadius: "10px",
  padding: "20px",
  marginBottom: "15px",
};

const searchResultContainer = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  margin: "20px 20",
};

const EC2 = () => {
  const {
    INNER_TEXT: {
      COLUMN_CONTAINER,
      AREA_CONTAINER,
      PRODUCTION_ACCOUNT,
      LOWER_TIER,
      BUCKET,
      SAVINGS_AREA,
      AREA,
    },
  } = STRING_CONSTANTS;
  return (
    <div style={searchResultContainer}>
      <div style={textStyle}>
        You can save $2500 per month overall in EC2 costs.{" "}
        <Link style={linkStyle} href="/">
          {" "}
          Click here{" "}
        </Link>{" "}
        to access a detailed report.
      </div>
      <TextMessage text={AREA} />
      <div style={columnContainer}>
        <TextMessage text={SAVINGS_AREA} />
        <span style={line}></span>
      </div>
      <div style={areasContainer}>
        <TextMessage text={BUCKET} textStyles={boldStyle} />
        <TextMessage text={LOWER_TIER} />
      </div>
      <div style={areasContainer}>
        <TextMessage text={PRODUCTION_ACCOUNT} textStyles={boldStyle} />
        <TextMessage text={AREA_CONTAINER} />
      </div>
      <div style={columnContainer}>
        <TextMessage text={COLUMN_CONTAINER} />
        <span style={line}></span>
      </div>
    </div>
  );
};

export default EC2;
