import { forwardRef } from "react";
import * as T from "./types";
import * as S from "./styles";

export const InputValue = forwardRef<HTMLInputElement, T.IInputValueProps>(
  ({ label, ...rest }, ref) => {
    return (
      <S.Container>
        <span>{label}</span>
        <div className="input-box">
          <input type="number" ref={ref} {...rest} />
          <span>R$</span>
        </div>
      </S.Container>
    );
  }
);
