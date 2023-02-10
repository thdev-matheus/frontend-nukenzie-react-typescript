/* eslint-disable react-hooks/exhaustive-deps */
import { useTransactions } from "../../Contexts";
import * as S from "./styles";
import * as C from "../../Components";
import { ITransaction } from "../../Contexts/Transactions/types";
import { useEffect, useState } from "react";

export const Summary = () => {
  const { transactions } = useTransactions();
  const [viewTransactions, setViewTransactions] =
    useState<ITransaction[]>(transactions);
  const [filter, setFilter] = useState<"Todas" | "Entradas" | "Saídas">(
    "Todas"
  );

  const entries = () => {
    const newTransactions = transactions.filter((t) => t.type === "Entrada");

    setViewTransactions(newTransactions);
  };

  const exits = () => {
    const newTransactions = transactions.filter((t) => t.type === "Saída");

    setViewTransactions(newTransactions);
  };

  const all = () => {
    setViewTransactions(transactions);
  };

  useEffect(() => {
    if (filter === "Entradas") {
      entries();
    } else if (filter === "Saídas") {
      exits();
    } else {
      all();
    }
  }, [transactions]);

  return (
    <S.Container>
      <div className="filters">
        <span
          style={{ color: filter === "Todas" ? "#fd377e" : "#212529" }}
          onClick={() => {
            setFilter("Todas");
            all();
          }}
        >
          Todas
        </span>
        <span
          style={{ color: filter === "Entradas" ? "#fd377e" : "#212529" }}
          onClick={() => {
            setFilter("Entradas");
            entries();
          }}
        >
          Entradas
        </span>
        <span
          style={{ color: filter === "Saídas" ? "#fd377e" : "#212529" }}
          onClick={() => {
            setFilter("Saídas");
            exits();
          }}
        >
          Saídas
        </span>
      </div>
      {viewTransactions.length === 0 ? (
        <C.NoTransactions />
      ) : (
        <S.BoxTransactions>
          {viewTransactions.map((t, i) => (
            <C.TransactionCard key={t.id} transaction={t} delay={i / 10} />
          ))}
        </S.BoxTransactions>
      )}
    </S.Container>
  );
};
