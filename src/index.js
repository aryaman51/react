import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Mycomponent from "./MyComponents";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <>
      <App />

      <Mycomponent />
    </>
  </StrictMode>,
);

