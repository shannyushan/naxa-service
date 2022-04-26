import React from 'react'
import {createRoot} from 'react-dom/client';
import App from "./App";


const rootcontainer = document.getElementById("app-root");

const root = createRoot(rootcontainer);
root.render(<App/>);