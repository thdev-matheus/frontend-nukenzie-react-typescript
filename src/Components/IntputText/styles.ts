import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  & > .label {
    padding-left: 1rem;

    font-size: 12pt;
    font-weight: bold;

    color: ${(props) => props.theme.txtPrimary};
  }

  & > input {
    width: 100%;
    height: 3rem;

    padding: 0 1rem;

    border-radius: 0.5rem;

    box-shadow: 1px 1px 3px 0 ${(props) => props.theme.bGray};

    font-size: 10pt;

    color: ${(props) => props.theme.txtPrimary};
    background-color: ${(props) => props.theme.bgPrimary};

    ::placeholder {
      color: ${(props) => props.theme.bGray};
    }
  }

  & > .helper-text {
    padding-left: 1rem;

    font-size: 10pt;

    color: ${(props) => props.theme.bGray};
  }
`;
