import { InputText } from "../../Components";
import * as S from "./styles";

export const Form = () => {
  return (
    <S.Container>
      <InputText
        label="Descrição"
        helperText="Ex: Compra de roupas"
        placeholder="Digite aqui sua descrição"
      />
    </S.Container>
  );
};
