import * as T from "./types";
import { createContext, useState, useContext, useEffect } from "react";

const TransactionContext = createContext<T.ITransactionsContextData>(
  {} as T.ITransactionsContextData
);

export const useTransactions = () => {
  const context = useContext(TransactionContext);

  return context;
};

export const TransactionsProvider = ({
  children,
}: T.ITransactionsProviderData) => {
  const [transactions, setTransactions] = useState<T.ITransaction[]>([]);

  const addTransaction = (transaction: T.ITransaction) => {
    setTransactions([transaction, ...transactions]);
    localStorage.setItem(
      "transactions",
      JSON.stringify([transaction, ...transactions])
    );
  };

  const removeTransaction = (idTransaction: string) => {
    const newTransactions = transactions.filter((t) => t.id !== idTransaction);

    setTransactions(newTransactions);
    localStorage.setItem("transactions", JSON.stringify(newTransactions));
  };

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");

    storedTransactions && setTransactions(JSON.parse(storedTransactions));
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, removeTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
