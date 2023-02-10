import { useTransactions } from "../../Contexts";
import * as S from "./styles";

export const Description = () => {
  const { total } = useTransactions();

  const totalBR = () => `R$ ${total.toFixed(2).toString().replace(".", ",")}`;

  return (
    <S.Container>
      <div className="box-total">
        <span className="label-total">Valor total:</span>
        <span className="label-value">{totalBR()}</span>
      </div>
      <span>O valor refere-se ao saldo</span>
    </S.Container>
  );
};
