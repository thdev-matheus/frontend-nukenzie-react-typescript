import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;

    & > .filters {
      width: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;

      & > span {
        font-size: 11pt;
        font-weight: bold;

        color: ${(props) => props.theme.txtPrimary};

        transition: 0.8s;
      }
    }
  }

  @media (min-width: 767px) {
    gap: 1rem;

    & > .filters {
      & > span {
        font-size: 12pt;

        cursor: pointer;

        :hover {
          transform: scale(0.9);

          transition: 0.8s;

          color: ${(props) => props.theme.primary};
        }
      }
    }
  }

  @media (min-width: 1024px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    & > .filters {
      width: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;

      & > span {
        font-size: 12pt;
        font-weight: bold;

        color: ${(props) => props.theme.txtPrimary};

        cursor: pointer;

        transition: 0.8s;

        :hover {
          transform: scale(0.9);

          transition: 0.8s;

          color: ${(props) => props.theme.primary};
        }
      }
    }
  }
`;

export const BoxTransactions = styled.div`
  @media (min-width: 320px) {
    width: 100%;
    height: calc(100vh - 18rem);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    padding: 1rem 0.5rem;

    border-radius: 0.5rem;

    box-shadow: 2px 2px 5px 2px ${(props) => props.theme.bGray};

    overflow: hidden auto;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 767px) {
    height: calc(100vh - 15.4rem);
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 14rem);
  }
`;
