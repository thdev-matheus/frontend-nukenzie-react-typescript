import { InputHTMLAttributes } from "react";

export interface IInputValueProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
