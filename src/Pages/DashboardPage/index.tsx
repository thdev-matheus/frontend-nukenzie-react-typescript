import * as S from "./styles";
import * as C from "../../Components";
import * as B from "../../Blocks";

import blackLogo from "../../Assets/Images/black-logo.png";

export const DashboardPage = () => {
  return (
    <S.Container>
      <S.BoxHeader>
        <img src={blackLogo} alt="logo" />
        <C.Button primary={false}>Inicio</C.Button>
      </S.BoxHeader>

      <S.BoxBody>
        <S.BoxLeft>
          <B.Form />
          {/* Total */}
        </S.BoxLeft>

        <S.BoxRight></S.BoxRight>
      </S.BoxBody>
    </S.Container>
  );
};
