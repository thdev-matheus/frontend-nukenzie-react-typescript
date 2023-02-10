import * as T from "./types";

import { TransactionsProvider } from "./Transactions";
import { MediaQueryProvider } from "./MediaQuery";

import { useTransactions } from "./Transactions";
import { useMediaQuery } from "./MediaQuery";

export { useTransactions, useMediaQuery };

export const Contexts = ({ children }: T.IContextsProps) => {
  return (
    <MediaQueryProvider>
      <TransactionsProvider>{children}</TransactionsProvider>
    </MediaQueryProvider>
  );
};
