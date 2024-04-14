
import SearchBox from "../components/common/search/SearchBox";
import TopSearch from "../components/common/search/TopSearch";

const mainContainer: any = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "66%",
}
const abc: any = {
  padding: "1px 14px 0px 14px",
  backgroundColor: "#F3FAFD"
}


export default function Home() {

  return (
    <div style={abc}>
    <div style={mainContainer}>
      <TopSearch page={'/snippetDetails'} />
      <SearchBox /> 
    </div>
    </div>
  );
}
