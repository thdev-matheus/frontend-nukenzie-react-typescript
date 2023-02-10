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

    background-color: #fff;

    overflow: hidden;
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
    width: 100%;
    height: 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10%;

    background-color: ${(props) => props.theme.bgPrimary};

    box-shadow: 0 2px 5px ${(props) => props.theme.bGray};

    & > img {
      width: 15%;
    }

    & > button {
      width: 10%;
      height: 2.5rem;

      box-shadow: 1px 1px 3px 0 ${(props) => props.theme.bGray};

      animation-name: grow-shrink;
      animation-timing-function: ease-in-out;
      animation-play-state: paused;

      :hover {
        animation-play-state: running;
      }
    }
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

    padding-top: 2rem;
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

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
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

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    & > h2 {
      font-size: 12pt;
      font-weight: bold;

      color: ${(props) => props.theme.txtPrimary};
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
