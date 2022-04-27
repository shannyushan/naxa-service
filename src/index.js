import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import serviceReducer from "./serviceReducer";
import sagas from "./sagas";

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    services: serviceReducer,
  },
  middleware:[sagaMiddleware]
});

sagaMiddleware.run(sagas);

const rootcontainer = document.getElementById("app-root");

const root = createRoot(rootcontainer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
