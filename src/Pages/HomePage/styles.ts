import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 320px) {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.bgSecondary};
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
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
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid green;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxRigth = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 40%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid magenta;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
