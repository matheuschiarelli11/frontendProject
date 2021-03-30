import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import { authService } from "./services/api";

function App() {
    return (
        <>
            <Routes />
            <ToastContainer />
        </>
    );
}

export default App;
