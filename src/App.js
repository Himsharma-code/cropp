/** @format */
import "./App.css";
import { CroppieExample } from "./component/Croppie";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DownloadImage from "./component/DownloadImage";

function App() {
  const image = useSelector((state) => state.image.value);
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CroppieExample />} />
          <Route path='/download' element={<DownloadImage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
