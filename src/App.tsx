import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { router } from "./Routes";
import { lightTheme } from "./Styles/Theme";

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
