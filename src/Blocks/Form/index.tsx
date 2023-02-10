import * as C from "../../Components";
import * as S from "./styles";

export const Form = () => {
  return (
    <S.Container>
      <C.InputText
        label="Descrição"
        helperText="Ex: Compra de roupas"
        placeholder="Digite aqui sua descrição"
      />

      <div>
        <C.InputValue label="Valor" placeholder="0" />
        {/* input de select */}
      </div>
    </S.Container>
  );
};
