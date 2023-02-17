import React from "react";

// Function component with props for Name component
function Name(props) {
  return (
    <div style={name}>
      <label style={title}>{props.title}</label>
      <input
        style={input}
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

// Styles for Name component

const name = {
  padding: "10px",
  width: "150px",
  display: "flex",
  flexDirection: "column",
  margin: "10px",
};

const title = {
  padding: "5px",
  fontSize: "20px",
  fontWeight: "bold",
  color: "#B2BABB",
};

const input = {
  borderRadius: "5px",
  width: "150px",
  height: "25px",
  margin: "5px",
  backgroundColor: "#1C2833",
  border: "none",
  color: "white",
};


export default Name;
