import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.bgPrimary};
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxHeader = styled.header`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 80%;
    height: 5rem;

    border: 1px solid yellow;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxBody = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 80%;
    height: calc(100vh - 5rem);

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid cyan;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxLeft = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 50%;
    height: 100%;

    border: 1px solid magenta;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxRight = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 50%;
    height: 100%;

    border: 1px solid green;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
