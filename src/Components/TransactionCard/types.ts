import { ITransaction } from "../../Contexts/Transactions/types";

export interface ITransactionCardProps {
  transaction: ITransaction;
  delay: number;
}

export interface IContainerProps {
  isEntry: boolean;
}
