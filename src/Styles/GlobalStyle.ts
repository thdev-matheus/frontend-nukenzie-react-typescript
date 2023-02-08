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

    @keyframes grow-shrink {
      
    50% {
      transform: scale(1.05);
    }

    to {
      transform: scale(1);
    }
  }

  @keyframes fade {
    25% {
      opacity: 0.7;
    }

    50% {
      opacity: 1;
    }

    75% {
      opacity: 0.7;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes swing {
    25% {
      transform: translate(10px, 10px);
    }

    50% {
      transform: translate(5px, 7px);
    }

    75% {
      transform: translate(7px, 3px);
    }

    to {
      transform: translate(0px, 0px);
    }
  }
    
    @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;
