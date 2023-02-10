import { ITransaction } from "../../Contexts/Transactions/types";

export interface ITransactionCardProps {
  transaction: ITransaction;
}

export interface IContainerProps {
  isEntry: boolean;
}
