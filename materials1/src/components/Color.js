import React from "react";

// Function component with props for Color component
function Color({ title, value, onChange, style }) {
  const inputStyle = {
    borderRadius: "100%",
    width: "25px",
    height: "25px",
    outline: "-10px solid black",
    margin: "5px",
    border: "none",
    ...style,
  };

  // Return JSX
  return (
    <div style={{ width: "150px", padding: "10px", display: "flex", flexDirection: "column", margin: "10px" }}>
      <label style={{ padding: "5px", fontSize: "20px", fontWeight: "bold", color: "#B2BABB" }}>{title}</label>
      <input style={inputStyle} type="color" value={value} onChange={onChange} />
    </div>
  );
}

export default Color;


