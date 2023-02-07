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
    width: 30%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;

    & > img {
      width: 40%;
    }

    & > .box-title {
      width: 100%;

      & > h2 {
        font-size: 30pt;
        font-weight: 900;

        line-height: 2.5rem;

        color: ${(props) => props.theme.txtSecondary};
      }
    }

    & > span {
      font-size: 14pt;

      color: ${(props) => props.theme.txtSecondary};
    }
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
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
