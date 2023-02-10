import styled from "styled-components";

export const Container = styled.form`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 95%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

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
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
