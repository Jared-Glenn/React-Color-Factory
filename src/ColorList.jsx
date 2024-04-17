import React from "react";
import { useNavigate } from "react-router-dom";


function ColorList( { colorList }) {

    const navigate = useNavigate()

  return (
    <>
        <div>
            <h2>Welcome to our Color Factory!</h2>
            <br />
            <h1>
                <button onClick={() => navigate("/colors/new")} >Add a color</button>
            </h1>
        </div>
        <div>
            <p>Please select a color.</p>
            <br />
            {colorList.map((color) => (
                <div key={color.color}>
                    <br />
                    <button onClick={() => navigate(`/colors/${color.color}`)}>{color.color}</button>
                </div>
            ))}
        </div>

    </>
  );
}


export default ColorList;