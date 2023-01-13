import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import "./index.css";
import { reducers } from "./redux/reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));


const store = createStore(reducers)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
