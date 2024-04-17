import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


function Color( { colorList }) {

    const params = useParams();

    const navigate = useNavigate();

    const colorObject = colorList.find((color) => {
        return color.color === params.color
    });

  return (
    <div >
        <Helmet>
            <style>{`body {
                background-color: ${colorObject.code}; 
                color: white;
                }`}</style>
        </Helmet>
        <h1>This is { params.color }!</h1>
        <br />
        <button onClick={() => navigate(-1)}>
        Go Back
        </button>
    </div>
  );
}


export default Color;