import React from "react";
import ReactDOM from "react-dom";
import "rsuite/dist/rsuite.min.css";
import App from "./App";

/* if (avt.platform === "web") {
    window.addEventListener("readySDK", loadExt);
} else {
    loadExt();
}; */

loadExt();

function loadExt() {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById("root")
    );
}

