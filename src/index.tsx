import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GloblaStyle } from "./Styles/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GloblaStyle />
    <App />
  </>
);
