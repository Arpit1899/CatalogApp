import React from "react";

function Volume(props) {
    return (
        <div style={volume}>
            <label style={title}>{props.title}</label>
            <input style={input} type="number" value={props.value} onChange={props.onChange} />
        </div>
    );
}

const volume = {
    width: '150px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
};

const title = {
    padding: '5px',
    color: '#B2BABB',
    fontSize: '20px',
    fontWeight: 'bold',
};

const input = {
    borderRadius: '5px',
    width: '150px',
    height: '25px',
    margin: '5px',
    backgroundColor: '#1C2833',
    border: 'none',
    color: 'white',
};
export default Volume;