import TextMessage from "@/components/common/TextMessage";
import Feedback from "../components/common/Feedback";
import SearchBox from "../components/common/search/SearchBox";
import EC2 from "../components/common/searchResult/EC2";
import TopSearch from "../components/common/search/TopSearch";
import Image from "next/image";
import user from '../../public/images/user.png';
import { STRING_CONSTANTS } from "../components/common/constants/StringConstants";

const mainContainer: any = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  background: "#F2F5F9"
}

const searchResultContainer = {
  padding: "20px",
  width: "85%"
}

const searchStyle = {
  height: "40px",
  padding: "10px 16px 20px",
  fontSize: "16px",
  background: "#CCD8E4",
  borderRadius: "12px",
  display: "flex",
  columnGap: "20px",
  alignItems: "center"
}

const ec2Details = () => {
  const { USER_ICON, INNER_TEXT: { TOP_SEARCH_RESULTS }} = STRING_CONSTANTS;

  return (
    <div style={mainContainer}>

      <div style={searchResultContainer}>
        <div style={searchStyle}>
          <Image src={user} alt={USER_ICON} width={20} height={20} />
          <TextMessage text={TOP_SEARCH_RESULTS} />
        </div>
      </div>
      <EC2 />
      <Feedback />
      <TopSearch page={'/'} />
      <SearchBox />
    </div>
  )
};

export default ec2Details;