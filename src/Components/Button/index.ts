import * as T from "./types";
import styled from "styled-components";

export const Button = styled.button<T.IButtonProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "3rem"};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: ${(props) => props.radius || "0.5rem"};

  font-size: ${(props) => props.fontSize || "14pt"};
  font-weight: bold;

  background-color: ${(props) =>
    props.primary === false ? props.theme.bGray : props.theme.primary};
  color: ${(props) =>
    props.primary === false
      ? props.theme.txtPrimary
      : props.theme.txtSecondary};

  cursor: pointer;

  transition: 0.8s;

  animation-name: bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-play-state: running;

  :hover {
    background-color: ${(props) =>
      props.primary === false ? props.theme.black : props.theme.secondary};
    color: ${(props) => props.theme.txtSecondary};

    transition: 1.5s;

    animation-play-state: paused;
  }
`;
