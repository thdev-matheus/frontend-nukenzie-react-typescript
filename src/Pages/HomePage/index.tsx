import * as S from "./styles";
import * as C from "../../Components";
import whiteLogo from "../../Assets/Images/white-logo.png";

export const HomePage = () => {
  return (
    <S.Container>
      <S.BoxLeft>
        <img src={whiteLogo} alt="logo" />
        <div className="box-title">
          <h2>Centralize o</h2>
          <h2>controle das suas</h2>
          <h2>finanças</h2>
        </div>
        <span>de forma rápida e segura</span>
      </S.BoxLeft>

      <S.BoxRigth>
        <C.HomeImg />
      </S.BoxRigth>
    </S.Container>
  );
};
