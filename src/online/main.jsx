import { createRoot } from "react-dom/client";
import Online from "./Online.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <Online/>
    </StrictMode>
)