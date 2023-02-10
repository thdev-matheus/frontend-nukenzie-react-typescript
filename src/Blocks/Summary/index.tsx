import { useTransactions } from "../../Contexts";
import * as S from "./styles";
import * as C from "../../Components";

export const Summary = () => {
  const { transactions } = useTransactions();

  console.log(transactions);

  return (
    <S.Container>
      {transactions.length === 0 ? (
        <C.NoTransactions />
      ) : (
        transactions.map((t) => (
          <C.TransactionCard transaction={t} key={t.id} />
        ))
      )}
    </S.Container>
  );
};
