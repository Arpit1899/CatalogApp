import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import SelectedItem from "./components/SelectedItem";
import InputPanel from "./components/InputPanel";

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [name, setName] = useState("New Material");
  const [volume, setVolume] = useState("");
  const [delivery, setDelivery] = useState("");
  const [color, setColor] = useState("");
  const [cost, setCost] = useState("0.00");
  const [totalCost, setTotalCost] = useState(0);
  const [orderStatus, setOrderStatus] = useState("");

  // Fetch data from API
  const handleSubmit = () => {
    fetch("http://localhost:3001/api/handleSubmit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items, totalCost }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOrderStatus("Order Submitted");
      })
      .catch((error) => {
        console.error(error);
        setOrderStatus("Order Failed");
      });
  };

  // Sets value of Name input field
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Sets value of Volume input field
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  // Sets value of Delivery input field
  const handleDeliveryChange = (e) => {
    setDelivery(e.target.value);
  };

  // Sets value of Color input field
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  // Sets value of Cost input field
  const handleCostChange = (e) => {
    setCost(e.target.value);
  };

  // Updates values of input fields when item is selected
  const handleUpdateSelectedItem = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    setSelectedItem(selectedItem);
    setName(selectedItem.name);
    setVolume(selectedItem.volume);
    setDelivery(selectedItem.delivery);
    setColor(selectedItem.color);
    setCost(selectedItem.cost);
  };

  // Deletes selected item
  const handleDeleteSelectedItem = () => {
    if (!selectedItem) return;

    const updatedItems = items.filter((item) => item.id !== selectedItem.id);
    setItems(updatedItems);
    setSelectedItem(null);
    setName("");
    setVolume("");
    setDelivery("");
    setColor("");
    setCost("");
  };

  // Adds new item to list
  const handleAddOnClick = () => {
    const newItem = {
      // Creates unique id for each item
      id: uuidv4(),
      name,
      volume,
      delivery,
      color,
      cost,
    };
    // Checks if item already exists in list
    const existingItem = items.find((item) => item.id === selectedItem?.id);
    if (existingItem) {
      const updatedItems = items.map((item) =>
        item.id === existingItem.id ? newItem : item
      );
      setItems(updatedItems);
    } else {
      setItems([...items, newItem]);
    }
    if (items.length === 5) {
      alert("You can only add 6 items");
    }
  };

  // Update total cost when items array changes
  useEffect(() => {
    const newTotalCost = items.reduce(
      (total, item) => total + item.volume * item.cost,
      0
    );
    setTotalCost(newTotalCost);
  }, [items]);

  return (
    <div style={Page}>
      <div style={MainComponent}>
        <h1 style={title}>Materials</h1>
        <div style={buttonContainer}>
          {/* Add button */}
          <button
            disabled={items.length === 6}
            style={add}
            onClick={handleAddOnClick}
          >
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "10px" }} />
            Add
          </button>

          {/* Delete button */}
          <button style={Delete} onClick={handleDeleteSelectedItem}>
            <FontAwesomeIcon icon={faTrash} style={{ marginRight: "10px" }} />
            Delete
          </button>
          <button style={submit} onClick={handleSubmit}>
            <FontAwesomeIcon style={{ marginRight: "10px" }} />
            Submit
          </button>

          {/* Displays order status */}
          {orderStatus && (
            <div style={order}>
              <FontAwesomeIcon icon="fa-circle-check" />
              {orderStatus}
            </div>
          )}
        </div>

        {/* Displays list of items */}
        <div style={ListPanel}>
          <SelectedItem
            title=""
            items={items}
            onUpdate={handleUpdateSelectedItem}
          />

          {/* Displays input fields */}
          <InputPanel
            name={name}
            volume={volume}
            delivery={delivery}
            color={color}
            cost={cost}
            onChange={handleNameChange}
            onVolumeChange={handleVolumeChange}
            onDeliveryChange={handleDeliveryChange}
            onColorChange={handleColorChange}
            onCostChange={handleCostChange}
          />
        </div>

        {/* Displays total cost */}
        <div style={totalcost}>Total Cost: $ {totalCost}</div>
      </div>
    </div>
  );
}

const Page = {
  display: "flex",
  marginLeft: "auto",
  justifyContent: "center",
  alignItems: "center",
};
const MainComponent = {
  backgroundColor: "#1C2833",
  marginTop: "100px",
  display: "flex",
  flexDirection: "column",
  border: "1px solid black",
  width: "1500px",
  height: "900px",
};

const title = {
  color: "white",
  margin: "40px",
  padding: "10px",
  marginLeft: "20px",
  justifyContent: "left",
};

const buttonContainer = {
  display: "flex",
  justifyContent: "left",
  width: "100%",
  marginLeft: "30px",
};
const add = {
  borderRadius: "15px",
  color: "white",
  backgroundColor: "#1B4F72",
  padding: "10px 20px",
  marginRight: "10px",
  border: "none",
  cursor: "pointer",
};

const Delete = {
  borderRadius: "15px",
  color: "white",
  backgroundColor: "#E74C3C",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
  marginRight: "10px",
};

const ListPanel = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const submit = {
  borderRadius: "15px",
  color: "white",
  backgroundColor: "#288203",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
  marginRight: "10px",
};

const order = {
  backgroundColor: "#145A32",
  borderRadius: "5px",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  color: "white",
};

const totalcost = {
  backgroundColor: "#1B4F72",
  borderRadius: "5px",
  padding: "10px",
  color: "white",
  marginLeft: "30px",
  marginTop: "20px",
  width: "230px",
};

export default App;
