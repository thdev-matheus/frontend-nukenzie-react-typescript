import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GloblaStyle } from "./Styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import { Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Flip}
      theme="dark"
    />
    <GloblaStyle />
    <App />
  </>
);
