import { createGlobalStyle } from "styled-components";

export const GloblaStyle = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-shadow: 0 0 0 0;
    box-sizing: border-box;
    }

    body {
      width: 100vw;
      height: 100vh;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      overflow: hidden auto;

      font-family: "Nunito";
    }

    h1, h2, h3, h4 {
      margin-bottom: 0;
    }
    
`;
