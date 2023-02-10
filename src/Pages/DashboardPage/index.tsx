import * as S from "./styles";
import * as C from "../../Components";
import * as B from "../../Blocks";

import blackLogo from "../../Assets/Images/black-logo.png";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../Contexts";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from "react";

export const DashboardPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const { widthScreen } = useMediaQuery();

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
          {widthScreen >= 767 && <B.Form />}
          <B.Description />
        </S.BoxLeft>

        <S.BoxRight>
          <h2>Resumo financeiro:</h2>
          <B.Summary />
        </S.BoxRight>
      </S.BoxBody>

      {widthScreen < 767 && (
        <IoMdAddCircleOutline onClick={() => setIsOpen(true)} />
      )}
    </S.Container>
  );
};
