import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  overflow: hidden;

  & > svg {
    width: 60px;
    height: 60px;

    position: absolute;
    z-index: 100;
    bottom: 25px;
    right: 20px;

    padding: 5px;

    border-radius: 0 50% 50% 50%;

    opacity: 0.8;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.primary};

    :active {
      transform: scale(0.9);
    }
  }
`;

export const BoxHeader = styled.header`
  @media (min-width: 320px) {
    width: 100%;
    height: 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 5%;

    background-color: ${(props) => props.theme.bgPrimary};

    box-shadow: 0 2px 5px ${(props) => props.theme.bGray};

    & > img {
      width: 30%;
    }

    & > button {
      width: 30%;
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

  @media (min-width: 767px) {
    & > img {
      width: 15%;
    }

    & > button {
      width: 10%;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 10%;
  }
`;

export const BoxBody = styled.div`
  @media (min-width: 320px) {
    width: 90%;
    height: calc(100vh - 5rem);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    padding-top: 1rem;

    overflow: hidden auto;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: center;
    gap: 0rem;

    padding-top: 2rem;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export const BoxLeft = styled.div`
  @media (min-width: 320px) {
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
  }

  @media (min-width: 767px) {
    width: 50%;
    height: 100%;
  }
`;

export const BoxRight = styled.div`
  @media (min-width: 320px) {
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;

    & > h2 {
      font-size: 12pt;
      font-weight: bold;

      color: ${(props) => props.theme.txtPrimary};
    }
  }

  @media (min-width: 767px) {
    width: 50%;
    height: 100%;

    gap: 1rem;
  }
`;
