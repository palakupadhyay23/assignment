import { useEffect, useState } from "react";
import Button from "../common/Button";
import { useRouter } from 'next/navigation';
import { questions } from "../constants/StringConstants";

const buttonStyle = (disabled: boolean) => {
    console.log(disabled)
    return (
        {
            height: "58px",
            flexBasis: "calc(50% - 5px)",
            padding: "10px 20px",
            fontSize: "14px",
            border: "grey 1px solid",
            borderRadius: "12px",
            cursor: !disabled ? "pointer" : "default",
            backgroundColor: !disabled ? "white" : ""
        }
    )
};

const buttonContainer: any = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px"
}
const TopSearch = ({ page }: any) => {
    console.log(page);
    const router = useRouter();
    const [suggestions, setSuggestions] = useState(questions[0]);
    useEffect(() => {
        console.log(page);
            if(page === '/snippetDetails') {
                setSuggestions(questions[0]);
            } else if (page === '/ec2Details') {
                setSuggestions(questions[1])
            } else {
                setSuggestions(questions[2])
            }
    }, [])

    const searchBtnHandler = () => {
            router.push( page, { scroll: false });
    }
    console.log(suggestions)

    return (
        <div>
            {
                suggestions ? (
                    <div style={buttonContainer}>
                        {suggestions.map((item: any) => {
                            return (
                                <Button key={item.text} text={item.text} btnStyles={buttonStyle(item.disable)} btnHandler={(e: any) => searchBtnHandler()} disabled={item.disable} />
                            )
                        })}
                    </div>
                ) : null
            }
        </div>
    )
};

export default TopSearch;