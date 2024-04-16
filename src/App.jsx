import React, { useState } from "react";
import { BrowserRouter, Routes, Routes, Navigate } from "react-router-dom";
import './App.css'

import Color from "./Color";
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";

function App() {
const defaultList = [
["Red", "#FF0000"],
["Blue", "#0000FF"],
["Green", "#00FF00"]
]

const [ colorList, setColorList ] = useState(defaultList);

  return (
<BrowserRouter>
<Routes>
<Route exact path="/colors/:color" element={ <Color colorList={ colorList } /> } />
<Route exact path="/colors" element={ <ColorList colorList={ colorList } /> } />
<Route exact path="/colors/new" element={ <ColorForm addColor={ addColor } /> } />
<Navigate to="/colors" replace />
</Routes>
</BrowserRouter>
  );
}


export default App;