import * as S from "./styles";
import * as C from "../../Components";

import blackLogo from "../../Assets/Images/black-logo.png";

export const DashboardPage = () => {
  return (
    <S.Container>
      <S.BoxHeader>
        <img src={blackLogo} alt="logo" />
        <C.Button primary={false}>Inicio</C.Button>
      </S.BoxHeader>

      <S.BoxBody>
        <S.BoxLeft></S.BoxLeft>

        <S.BoxRight></S.BoxRight>
      </S.BoxBody>
    </S.Container>
  );
};
