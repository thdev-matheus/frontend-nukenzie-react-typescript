import * as S from "./styles";
import * as C from "../../Components";
import * as B from "../../Blocks";

import blackLogo from "../../Assets/Images/black-logo.png";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.BoxHeader>
        <img src={blackLogo} alt="logo" />
        <C.Button primary={false} onClick={() => navigate("/")}>
          Inicio
        </C.Button>
      </S.BoxHeader>

      <S.BoxBody>
        <S.BoxLeft>
          <B.Form />
          <B.Description />
        </S.BoxLeft>

        <S.BoxRight>
          <h2>Resumo financeiro:</h2>
          <B.Summary />
        </S.BoxRight>
      </S.BoxBody>
    </S.Container>
  );
};
