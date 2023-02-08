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
`;

export const BoxLeft = styled.div`
  @media (min-width: 320px) {
    width: 80%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    & > img {
      width: 70%;
    }

    & > .box-title {
      width: 100%;

      & > h2 {
        font-size: 18pt;
        font-weight: 900;

        text-align: center;

        line-height: 2rem;

        color: ${(props) => props.theme.txtSecondary};
      }
    }

    & > span {
      font-size: 12pt;

      color: ${(props) => props.theme.txtSecondary};
    }
  }

  @media (min-width: 767px) {
    width: 30%;

    align-items: flex-start;
    gap: 1rem;

    & > img {
      width: 60%;
    }

    & > .box-title {
      & > h2 {
        text-align: left;
      }
    }
  }

  @media (min-width: 1024px) {
    gap: 2rem;

    & > img {
      width: 40%;
    }

    & > .box-title {
      & > h2 {
        font-size: 25pt;

        line-height: 2.5rem;
      }
    }

    & > span {
      font-size: 14pt;
    }
  }
`;

export const BoxRigth = styled.div`
  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 767px) {
    width: 40%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
