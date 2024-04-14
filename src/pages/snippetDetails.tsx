import TextMessage from "@/components/common/TextMessage";
import Feedback from "../components/common/Feedback";
import SearchBox from "../components/search/SearchBox";
import CodeSnippet from "../components/searchResult/CodeSnippet";
import Image from "next/image";
import user from "../../public/images/user.png";
import { STRING_CONSTANTS } from "../components/constants/StringConstants";

const mainContainer: any = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  background: "#F2F5F9",
};

const searchStyle = {
  height: "40px",
  padding: "10px 16px 20px",
  margin: "20px",
  fontSize: "16px",
  background: "#CCD8E4",
  borderRadius: "12px",
  display: "flex",
  columnGap: "20px",
  alignItems: "center",
};

const mainWrapper = {
  width: "90%",
};

const snippetDetails = () => {
  const {
    USER_ICON,
    INNER_TEXT: { SEARCH_RESULTS },
  } = STRING_CONSTANTS;

  return (
    <div style={mainContainer}>
      <div style={mainWrapper}>
        <div style={searchStyle}>
          <Image src={user} alt={USER_ICON} width={20} height={20} />
          <TextMessage text={SEARCH_RESULTS} />
        </div>
        <CodeSnippet />
        <Feedback />
        <SearchBox />
      </div>
    </div>
  );
};

export default snippetDetails;
