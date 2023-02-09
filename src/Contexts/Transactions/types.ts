import { ReactNode } from "react";

export interface ITransactionsContextData {
  transactions: ITransaction[];
  addTransaction: (transaction: ITransaction) => void;
  removeTransaction: (idTransaction: string) => void;
}

export interface ITransaction {
  id: string;
  value: number;
  description: string;
  type: "Entrada" | "Saída";
}

export interface ITransactionsProviderData {
  children: ReactNode;
}
