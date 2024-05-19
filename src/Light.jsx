const Light = ({color,active}) => {
    return (
    <div
        style={{border: "none",
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        backgroundColor: color, opacity: active ? 1 : 0.2 }}
    ></div>
    )
}

export default Light