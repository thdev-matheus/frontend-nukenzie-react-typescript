import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IBottomBarProps {
  children: ReactNode;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
