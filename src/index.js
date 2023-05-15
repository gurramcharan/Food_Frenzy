import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { FoodAppContext, FoodAppProvider } from "./context/FoodAppContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { FoodAppContext };

root.render(
  <StrictMode>
    <Router>
      <FoodAppProvider>
        <App />
      </FoodAppProvider>
    </Router>
  </StrictMode>
);
