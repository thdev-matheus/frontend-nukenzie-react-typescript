import { InputHTMLAttributes } from "react";

export interface IInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
}
