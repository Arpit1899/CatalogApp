import React from "react";
import "./SelectedItem.css";

// Function component with props for SelectedItem component
function SelectedItem(props) {
  const items = props.items || [];
  const handleClick = (id) => {
    props.onUpdate(id);
  };
  return (
    // Return JSX
    <div className="component">
      {/* Map through items array and return JSX */}
      {items.map((item) => (
        <div
          className="list-container"
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          <p
            className="color-indicator"
            style={{ backgroundColor: item.color }}
          ></p>
          <div>
            <p className="title">{item.name}</p>
            <p className="volume">{item.volume} m³</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SelectedItem;
