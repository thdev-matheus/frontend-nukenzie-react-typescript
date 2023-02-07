import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BigCircle = styled(motion.img)`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100%;

    position: absolute;
    z-index: 10;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const MediumCircle = styled(motion.img)`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 90%;

    position: absolute;
    z-index: 11;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const SmallCircle = styled(motion.img)`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 80%;

    position: absolute;
    z-index: 12;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const Sheet = styled(motion.img)`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 45%;

    position: absolute;
    z-index: 13;

    box-shadow: 2px 2px 5px ${(props) => props.theme.black};
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const SmallCard = styled(motion.img)`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 35%;

    position: absolute;
    z-index: 14;
    right: 95px;
    bottom: -60px;

    box-shadow: 2px 2px 7px ${(props) => props.theme.black};
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BigCard = styled(motion.img)`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 50%;

    position: absolute;
    z-index: 14;
    left: 40px;
    bottom: -30px;

    box-shadow: 2px 2px 7px ${(props) => props.theme.black};
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
