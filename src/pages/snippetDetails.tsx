import TextMessage from "@/components/common/TextMessage";
import Feedback from "../components/common/Feedback";
import SearchBox from "../components/common/search/SearchBox";
import CodeSnippet from "../components/common/searchResult/CodeSnippet";
import TopSearch from "../components/common/search/TopSearch";
import Image from "next/image";
import user from '../../public/images/user.png';
import chevron from '../../public/images/chevronDown.svg';
import Collapsible from "react-collapsible";
import { STRING_CONSTANTS } from "../components/common/constants/StringConstants";

const mainContainer: any = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  background: "#F2F5F9"
}

const searchStyle = {
  height: "40px",
  padding: "10px 16px 20px",
  margin: "20px",
  fontSize: "16px",
  background: "#CCD8E4",
  borderRadius: "12px",
  display: "flex",
  columnGap: "20px",
  alignItems: "center"
};

const mainWrapper = {
  width: "90%"
};

const columnContainer: any = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  background: "white",
  borderRadius: "10px",
  padding: "15px 20px"
};

const line = {
  flex: 1,
  borderBottom: "1px solid black"
};

const collapsibleStyle = {
  width: "100%",
  background: "white",
  margin: "10px",
  borderRadius: "15px",
};

const topSearchContainer = {
  width: "80%",
  padding: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const collapsible = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const snippetDetails = () => {
  const {CHEVRON_ICON, USER_ICON, INNER_TEXT: { COLUMN_CONTAINER, SEARCH_RESULTS }} = STRING_CONSTANTS;

  return (
    <div style={mainContainer}>
      <div style={mainWrapper}>
        <div style={searchStyle}>
          <Image src={user} alt={USER_ICON} width={20} height={20} />
          <TextMessage text={SEARCH_RESULTS} />
        </div>
        <CodeSnippet />

        <div style={collapsibleStyle}>
          <Collapsible trigger={
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
                <TopSearch page={'/ec2Details'} />
            </div>
          </Collapsible>
        </div>

        <Feedback />
        <SearchBox />
      </div>
    </div>
  )
};

export default snippetDetails;