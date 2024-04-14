const defaultTextStyles = {
    fontFamily: "sans-serif",
    lineHeight: "30px"
}

const TextMessage = ({text, textStyles=defaultTextStyles}: any) => {
    return (
        <div style={textStyles}>
            {text}
        </div>
    )
};

export default TextMessage;