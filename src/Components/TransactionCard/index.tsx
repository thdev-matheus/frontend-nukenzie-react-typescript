import * as T from "./types";
import * as S from "./styles";
import { FaTrash } from "react-icons/fa";
import { useTransactions } from "../../Contexts";

export const TransactionCard = ({ transaction }: T.ITransactionCardProps) => {
  const { id, description, type, value } = transaction;
  const { removeTransaction } = useTransactions();

  const valueBR = () => {
    return `R$ ${Math.abs(value).toFixed(2).toString().replace(".", ",")}`;
  };

  return (
    <S.Container isEntry={type === "Entrada"}>
      <div className="box-detail-card">
        <h2 title={description}>{description}</h2>
        <span>{type}</span>
      </div>

      <div className="box-value">
        <span>{valueBR()}</span>
      </div>

      <div className="box-trash">
        <FaTrash onClick={() => removeTransaction(id)} />
      </div>
    </S.Container>
  );
};
