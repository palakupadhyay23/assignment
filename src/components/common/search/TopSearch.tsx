import Button from "../Button";
import { useRouter } from 'next/navigation';

const topSearchData = ["Top Cloud cost by services",
    "which application cost are increasing the fastest",
    "How much money are we",
    "which are the largest s3"];

const buttonStyle = {
    height: "58px",
    flexBasis: "calc(50% - 5px)",
    padding: "10px 20px",
    fontSize: "14px",
    border: "grey 1px solid",
    borderRadius: "12px",
    cursor: "pointer"
};

const buttonContainer: any = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px"
}
const TopSearch = ({ page }: any) => {
    const router = useRouter();

    const searchBtnHandler = (e: any, item: any) => {
        if (item === "Top Cloud cost by services") {
            router.push( page, { scroll: false });
        }
    }

    return (
        <div>
            {topSearchData ? (
                <div style={buttonContainer}>
                    {topSearchData.map((item) => {
                        const btnStyles = {
                            ...buttonStyle,
                            backgroundColor: item === "Top Cloud cost by services" ? "#FFFFFF" : "#F3FAFD",
                            cursor: item === "Top Cloud cost by services" ? "pointer" : "default",
                            transition: "background-color 0.3s", // Add transition for smoother hover effect
                            "&:hover": { // Update styles on hover
                                backgroundColor: item === "Top Cloud cost by services" ? "#E7F5FB" : "#F3FAFD", // Change background color on hover
                            }
                        };
                        return (
                            <Button 
                                key={item} 
                                text={item} 
                                btnStyles={btnStyles} 
                                btnHandler={(e: any) => searchBtnHandler(e, item)} 
                            />
                        )
                    })}
                </div>
            ) : null}
        </div>
    )
};

export default TopSearch;