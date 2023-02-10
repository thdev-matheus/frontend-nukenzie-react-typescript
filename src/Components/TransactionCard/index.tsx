import * as T from "./types";
import * as S from "./styles";
import { FaTrash } from "react-icons/fa";
import { useTransactions } from "../../Contexts";

export const TransactionCard = ({
  transaction,
  delay,
}: T.ITransactionCardProps) => {
  const { id, description, type, value } = transaction;
  const { removeTransaction } = useTransactions();

  const valueBR = () => {
    return `R$ ${Math.abs(value).toFixed(2).toString().replace(".", ",")}`;
  };

  const variants = () => {
    return {
      transition: {
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
      },
      initial: {
        x: 100,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
      },
    };
  };

  return (
    <S.Container
      isEntry={type === "Entrada"}
      transition={variants().transition}
      initial={variants().initial}
      animate={variants().animate}
    >
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
