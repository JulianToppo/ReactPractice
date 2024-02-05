import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import UserContextStore from "./utils/UserContextStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextStore>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContextStore>
);
