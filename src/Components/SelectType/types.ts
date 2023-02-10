import { Dispatch, SetStateAction } from "react";

export interface ISelectTypeProps {
  label: string;
  activeOption: string;
  options: ("Entrada" | "Saída")[];

  setActiveOption: Dispatch<SetStateAction<"Entrada" | "Saída">>;
}
