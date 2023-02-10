import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 95%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;

    padding: 1rem;

    border-radius: 0.5rem;

    box-shadow: 1px 1px 3px 0 ${(props) => props.theme.bGray};

    & > .box-total {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;

      & > .label-total {
        font-size: 12pt;
        font-weight: 900;

        color: ${(props) => props.theme.txtPrimary};
      }

      & > .label-value {
        font-size: 12pt;
        font-weight: 900;

        color: ${(props) => props.theme.primary};
      }
    }

    & > span {
      font-size: 10pt;
    }
  }

  @media (min-width: 1024px) {
    width: 95%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;

    padding: 1rem;

    border-radius: 0.5rem;

    box-shadow: 1px 1px 3px 0 ${(props) => props.theme.bGray};

    & > .box-total {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;

      & > .label-total {
        font-size: 12pt;
        font-weight: 900;

        color: ${(props) => props.theme.txtPrimary};
      }

      & > .label-value {
        font-size: 12pt;
        font-weight: 900;

        color: ${(props) => props.theme.primary};
      }
    }

    & > span {
      font-size: 10pt;
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
