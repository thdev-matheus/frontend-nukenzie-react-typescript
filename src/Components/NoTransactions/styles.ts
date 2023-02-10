import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  @media (min-width: 320px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;

    & > h2 {
      font-size: 11pt;
      font-weight: bold;

      text-align: left;
      color: ${(props) => props.theme.txtPrimary};
    }
  }

  @media (min-width: 767px) {
    & > h2 {
      font-size: 14pt;
    }
  }
`;

export const BoxCard = styled(motion.div)`
  @media (min-width: 320px) {
    width: 100%;
    height: 4rem;

    display: flex;
    justify-content: flex-start;
    gap: 1rem;

    overflow: hidden;

    border-radius: 0.5rem;

    background-color: ${(props) => props.theme.bgPrimary};

    animation-name: fade;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    animation-iteration-count: infinite;

    & > .box-border {
      width: 0.3rem;
      height: 100%;

      background-color: ${(props) => props.theme.lGray};
    }

    & > .box-description {
      width: calc(100% - 0.5rem);
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;

      & > .box-1 {
        width: 70%;
        height: 0.8rem;

        border-radius: 0 0.3rem 0.3rem 0;

        background-color: ${(props) => props.theme.lGray};
      }

      & > .box-2 {
        width: 50%;
        height: 0.8rem;

        border-radius: 0 0.3rem 0.3rem 0;

        background-color: ${(props) => props.theme.lGray};
      }
    }
  }

  @media (min-width: 767px) {
    height: 5rem;
  }
`;
