import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";

function App() {
    return (
        <>
            <Routes />
            <ToastContainer />
        </>
    );
}

export default App;
