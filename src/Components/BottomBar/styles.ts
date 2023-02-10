import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 6000;

  background-color: ${(props) => props.theme.transparentBlack};
`;

export const BoxDead = styled.div`
  width: 100%;
  height: 40%;
`;

export const BoxChildren = styled(motion.div)`
  width: 100%;
  height: 60%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 0.5rem;

  border-radius: 1rem 1rem 0 0;

  overflow: hidden auto;

  background-color: ${(props) => props.theme.bgPrimary};
`;
