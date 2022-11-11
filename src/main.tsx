import React from "react";
import { createRoot } from "react-dom/client";
import "uno.css";

import "@tamagui/core/reset.css";
import App from "./App";
import "./index.css";
import config from "./tamagui.config";
import "./vite-plugin-react-click-to-component/client";

import { TamaguiProvider } from "tamagui";

const root = createRoot(document.querySelector("#root")!);
root.render(
    <React.StrictMode>
        <TamaguiProvider config={config}>
            <App />
        </TamaguiProvider>
    </React.StrictMode>
);
