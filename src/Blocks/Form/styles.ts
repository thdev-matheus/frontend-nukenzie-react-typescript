import styled from "styled-components";

export const Container = styled.form`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 95%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    padding: 1rem;

    border-radius: 0.5rem;

    box-shadow: 1px 1px 3px 0 ${(props) => props.theme.bGray};

    & > .box-info {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }

    & > button {
      height: 3.5rem;

      margin-top: 1rem;

      animation-play-state: paused;

      box-shadow: 1px 1px 3px 0 ${(props) => props.theme.bGray};

      :hover {
        animation-play-state: running;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 95%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    padding: 1rem;

    border-radius: 0.5rem;

    box-shadow: 1px 1px 3px 0 ${(props) => props.theme.bGray};

    & > .box-info {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }

    & > button {
      height: 3.5rem;

      margin-top: 1rem;

      animation-play-state: paused;

      box-shadow: 1px 1px 3px 0 ${(props) => props.theme.bGray};

      :hover {
        animation-play-state: running;
      }
    }
  }
`;
