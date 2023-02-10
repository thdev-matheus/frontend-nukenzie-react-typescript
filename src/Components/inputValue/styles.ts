import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  & > span {
    padding-left: 1rem;
    font-size: 12pt;
    font-weight: bold;

    color: ${(props) => props.theme.txtPrimary};
  }

  & > .input-box {
    width: 100%;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    padding: 0 1rem;

    border-radius: 0.5rem;

    box-shadow: 1px 1px 3px 0 ${(props) => props.theme.bGray};

    background-color: ${(props) => props.theme.bgPrimary};

    & > input {
      width: 80%;
      color: ${(props) => props.theme.txtPrimary};
      background-color: transparent;

      font-size: 12pt;

      ::placeholder {
        color: ${(props) => props.theme.bGray};
      }

      ::-webkit-inner-spin-button {
        display: none;
      }
    }

    & > span {
      font-size: 16pt;
      font-weight: bold;

      color: ${(props) => props.theme.txtPrimary};
    }
  }
`;
