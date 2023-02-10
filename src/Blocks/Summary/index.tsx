import { useTransactions } from "../../Contexts";
import * as S from "./styles";
import * as C from "../../Components";

export const Summary = () => {
  const { transactions } = useTransactions();

  console.log(transactions);

  return (
    <S.Container>
      {transactions.length === 0 ? <C.NoTransactions /> : <h1>tem</h1>}
    </S.Container>
  );
};
