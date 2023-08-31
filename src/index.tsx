import React from "react";
import { createRoot } from "react-dom/client";

import "./assets/reset.css";
import { Comments } from "./components/comments";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(<Comments />);
