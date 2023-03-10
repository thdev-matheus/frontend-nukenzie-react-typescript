import styled from "styled-components";
import * as T from "./types";
import { motion } from "framer-motion";

export const Container = styled(motion.div)<T.IContainerProps>`
  @media (min-width: 320px) {
    width: 100%;
    min-height: 7.2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-radius: 0.5rem;
    border-left: 0.3rem solid
      ${(props) => (props.isEntry ? props.theme.tertiary : "red")};

    box-shadow: 1px 1px 3px 0 ${(props) => props.theme.bGray};

    & > .box-detail-card {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 0.5rem;

      padding: 0 0.5rem;

      overflow: hidden;

      & > h2 {
        margin-bottom: 0;

        overflow: hidden;

        white-space: nowrap;
        text-overflow: ellipsis;

        font-size: 12pt;
        font-weight: bold;

        cursor: default;

        color: ${(props) => props.theme.txtPrimary};
      }

      & > span {
        font-size: 10pt;

        color: ${(props) => props.theme.txtPrimary};
      }
    }

    & > .box-value {
      width: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      overflow: hidden;

      padding: 0 0.5rem;

      & > span {
        font-size: 10pt;
      }
    }

    & > .box-trash {
      width: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      padding: 0 0.5rem;

      & > svg {
        width: 15px;
        height: 15px;

        color: ${(props) => props.theme.txtPrimary};

        cursor: pointer;

        transition: 0.8s;

        transform: scale(1);

        animation-name: none;
        animation-duration: 3s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-play-state: running;

        :hover {
          transform: scale(1.5);
          animation-name: shake;
          /* animation-play-state: running; */

          color: ${(props) => props.theme.primary};

          transition: 0.8s;
        }
      }
    }
  }

  @media (min-width: 500px) {
    min-height: 6rem;

    flex-direction: row;
    justify-content: flex-start;

    & > .box-detail-card {
      width: 65%;
      height: 100%;

      padding: 0 1rem;
    }

    & > .box-value {
      width: 25%;
      height: 100%;

      justify-content: center;

      & > span {
        font-size: 8pt;
      }
    }

    & > .box-trash {
      width: 10%;
      height: 100%;

      justify-content: center;
    }
  }
`;
