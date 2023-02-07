import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

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
`;

export const BigCircle = styled(motion.img)`
  width: 100%;

  position: absolute;
  z-index: 10;

  animation-name: grow-shrink;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-delay: 2s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
`;

export const MediumCircle = styled(motion.img)`
  width: 90%;

  position: absolute;
  z-index: 11;

  animation-name: grow-shrink;
  animation-duration: 3.5s;
  animation-timing-function: ease-in-out;
  animation-delay: 2s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
`;

export const SmallCircle = styled(motion.img)`
  width: 80%;

  position: absolute;
  z-index: 12;

  animation-name: grow-shrink;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-delay: 2s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
`;

export const Sheet = styled(motion.img)`
  width: 45%;

  position: absolute;
  z-index: 13;

  box-shadow: 2px 2px 5px ${(props) => props.theme.black};

  animation-name: fade;
  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-delay: 2s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
`;

export const SmallCard = styled(motion.img)`
  width: 35%;

  position: absolute;
  z-index: 14;
  right: 95px;
  bottom: -60px;

  box-shadow: 2px 2px 7px ${(props) => props.theme.black};

  animation-name: swing;
  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-delay: 3s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
`;

export const BigCard = styled(motion.img)`
  width: 50%;

  position: absolute;
  z-index: 14;
  left: 40px;
  bottom: -30px;

  box-shadow: 2px 2px 7px ${(props) => props.theme.black};

  animation-name: swing;
  animation-duration: 15s;
  animation-timing-function: ease-in-out;
  animation-delay: 3s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
`;
