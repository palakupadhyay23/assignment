import React, { useEffect, useState } from "react";
import CodeBlock from "../common/CodeBlock";
import CloudCostChart from "../common/CloudCostChart";
import TextMessage from "../common/TextMessage";
import Collapsible from "react-collapsible";
import Image from "next/image";
import chevron from "./../../../public/images/chevronDown.svg";
import astutoCloudLogo from "./../../../public/images/CloudLogo.jpeg";
import { IoCopyOutline } from "react-icons/io5";
import { CiExport } from "react-icons/ci";
import { STRING_CONSTANTS } from "../constants/StringConstants";
import { TfiReload } from "react-icons/tfi";
import TopSearch from "../search/TopSearch";

const container: any = {
  padding: "0 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const columnContainer: any = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  background: "white",
  borderRadius: "10px",
  padding: "10px 20px",
  fontFamily: "sans-serif",
  fontSize: "14px",
};

const line = {
  flex: 1,
  borderBottom: "1px solid black",
};

const textStyle = {
  padding: "20px",
  fontFamily: "sans-serif",
};

const collapsibleStyle = {
  width: "100%",
  background: "white",
  margin: "0 20px 20px 20px",
  borderRadius: "15px",
};

const chartContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0px 20px",
  background: "#F2F5F9",
  borderRadius: "15px",
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

const imageStyle = {
  borderRadius: "5px",
};

const logoContainer = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  padding: "0 20px",
};
const latestRunStyle = {
  color: "grey",
};

const topSearchContainer = {
  width: "80%",
  padding: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const collapsible = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const CodeSnippet: React.FC = () => {
  const {
    CHEVRON_ICON,
    LOGO,
    JAVASCRIPT,
    QUERY,
    INNER_TEXT: { PRODUCTION_RESULT, PIE_CHART, COLUMN_CONTAINER },
    SNIPPET: {
      SELECT,
      SERVICE,
      TOTAL_COST,
      FROM,
      CLOUD_COSTS,
      WHERE,
      ACCOUNT_TYPE,
      GROUP_BY,
      SERVICES,
      ORDER_BY,
      DESC,
    },
  } = STRING_CONSTANTS;
  const codeString = `
  ${SELECT}
  ${SERVICE}
  ${TOTAL_COST}
  ${FROM}
  ${CLOUD_COSTS}
  ${WHERE}
  ${ACCOUNT_TYPE}
  ${GROUP_BY}
  ${SERVICES}
  ${ORDER_BY}
  ${DESC}
  `;
  const [showCode, setShowCode] = useState(true);

  useEffect(() => {
    if (showCode) {
      const timeConsumed = setTimeout(() => setShowCode(false), 3000);

      () => clearTimeout(timeConsumed);
    }
  }, [showCode]);

  return (
    <div style={container}>
      <div style={collapsibleStyle}>
        <Collapsible
          trigger={
            <div style={columnContainer}>
              <TextMessage text={QUERY} />
              <span style={line}></span>
              <Image src={chevron} alt={CHEVRON_ICON} width={20} height={20} />
            </div>
          }
          transitionTime={200}
          open={showCode}
          onClick={() => setShowCode(true)}
        >
          <CodeBlock codeString={codeString} language={JAVASCRIPT} />
          <div style={iconsContainer}>
            <div style={leftIcon}>
              <IoCopyOutline />
              <p>Copy Query</p>
            </div>

            <div style={leftIcon}>
              <p style={latestRunStyle}>Last run on 12 Oct, 2023</p>
              <TfiReload />
              <p>Re-run Query</p>
            </div>
          </div>
        </Collapsible>
      </div>

      <div style={collapsibleStyle}>
        <Collapsible
          trigger={
            <>
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
              <div style={columnContainer}>
                <TextMessage text={PIE_CHART} />
                <span style={line}></span>
                <Image
                  src={chevron}
                  alt={CHEVRON_ICON}
                  width={20}
                  height={20}
                />
              </div>
            </>
          }
          transitionTime={200}
          open={true}
          triggerDisabled={true}
        >
          <div style={chartContainer}>
            <CloudCostChart />
          </div>
          <div style={iconsContainer}>
            <div style={leftIcon}>
              <IoCopyOutline />
              <p>Add to Dashboard</p>
            </div>

            <div style={leftIcon}>
              <CiExport />
              <p>Export</p>
            </div>
          </div>
        </Collapsible>
        <Collapsible
          trigger={
            <div style={columnContainer}>
              <TextMessage text={COLUMN_CONTAINER} />
              <span style={line}></span>
              <Image src={chevron} alt={CHEVRON_ICON} width={20} height={20} />
            </div>
          }
          transitionTime={200}
          open={true}
          style={collapsible}
          triggerDisabled={true}
        >
          <div style={topSearchContainer}>
            <TopSearch page={"/ec2Details"} />
          </div>
        </Collapsible>
      </div>
    </div>
  );
};

export default CodeSnippet;
