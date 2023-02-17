import React from "react";

// Function component for Cost component
function Cost(props) {
  return (
    <div style={cost}>
      <label style={title}>{props.title}</label>
      <input
        style={input}
        type="number"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

// Styles for Cost component
const cost = {
  width: "250px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  margin: "10px",
};

const title = {
  padding: "5px",
  color: "#B2BABB",
  fontSize: "20px",
  fontWeight: "bold",
};

const input = {
  borderRadius: "5px",
  width: "150px",
  height: "25px",
  margin: "5px",
  border: "none",
  color: "white",
  backgroundColor: "#1C2833",
};

export default Cost;
