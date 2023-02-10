import * as T from "./types";

import { TransactionsProvider } from "./Transactions";

import { useTransactions } from "./Transactions";

export { useTransactions };

export const Contexts = ({ children }: T.IContextsProps) => {
  return <TransactionsProvider>{children}</TransactionsProvider>;
};
