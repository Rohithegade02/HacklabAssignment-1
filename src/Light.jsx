const Light = ({color,active}) => {
    return (
    <div
        style={{border: "none",
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        backgroundColor: color, opacity: active ? 1 : 0.1 }}            //if active showing opacity to 1 and inactive state showing black
    ></div>
    )
}

export default Light