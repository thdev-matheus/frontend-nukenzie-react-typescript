import { forwardRef } from "react";
import * as S from "./styles";
import * as T from "./types";

export const InputText = forwardRef<HTMLInputElement, T.IInputTextProps>(
  ({ label, helperText, ...rest }, ref) => {
    return (
      <S.Container>
        <span className="label">{label}</span>
        <input {...rest} ref={ref} />
        {helperText && <span className="helper-text">{helperText}</span>}
      </S.Container>
    );
  }
);
