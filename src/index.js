import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/*" element={<App />} />
        </Routes>
    </Router>
   
    ,
    document.getElementById("root")
)