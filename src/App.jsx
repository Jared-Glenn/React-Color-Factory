import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

import Color from "./Color";
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";

function App() {
const defaultList = [
  {
    "color": "Red",
    "code": "#FF0000"
  },
  {
    "color": "Blue",
    "code": "#0000FF"
  },
  {
    "color": "Green",
    "code": "#00FF00"
  }
];

const [ colorList, setColorList ] = useState(defaultList);

const addColor = (colorObject) => {
  setColorList(prevState => {
    
    const updatedList = [...prevState]
    
    const newArray = [
      ...updatedList,
      colorObject
    ]

    return newArray;
  })
}

  return (
<BrowserRouter>
<Routes>
<Route exact path="/colors/:color" element={ <Color colorList={ colorList } /> } />
<Route exact path="/colors" element={ <ColorList colorList={ colorList } /> } />
<Route exact path="/colors/new" element={ <ColorForm addColor={ addColor } /> } />
<Route path="*" element={ <Navigate to="/colors" replace /> } />
</Routes>
</BrowserRouter>
  );
}


export default App;