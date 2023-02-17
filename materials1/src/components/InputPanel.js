import React from "react";
import Name from "./Name";
import Volume from "./Volume";
import Delivery from "./Delivery";
import Color from "./Color";
import Cost from "./Cost";

// Function component with props for InputPanel component
function InputPanel(props) {
  return (
    <div style={panel}>
      <div style={leftCol}>
        
        {/* Pass props to Name component */}
        <Name title="Name" value={props.name} onChange={props.onChange} />

        {/* Pass props to Volume component */}
        <Volume
          title="Volume (m³)"
          value={props.volume}
          onChange={props.onVolumeChange}
        />

        {/* Pass props to Delivery component */}
        <Delivery
          title="Delivery"
          value={props.delivery}
          onChange={props.onDeliveryChange}
        />
      </div>

        {/* Pass props to Color and Cost component */}
      <div style={rightCol}>
        <Color
          title="Color"
          value={props.color}
          onChange={props.onColorChange}
        />
        <Cost
          title="Cost (USD per m³)"
          value={props.cost}
          onChange={props.onCostChange}
        />
      </div>
    </div>
  );
}

const panel = {
  width: "600px",
  height: "310px",

  marginTop: "30px",
  marginLeft: "10px",
  backgroundColor: "#17202A",
  border: "1px solid #515A5A",
  display: "flex",
  flexDirection: "row",
};

const leftCol = {
  width: "250px",
  marginLeft: "10px",
};

const rightCol = {
  width: "250px",
  marginLeft: "10px",
};
export default InputPanel;
