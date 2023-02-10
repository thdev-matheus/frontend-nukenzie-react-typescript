import { useState } from "react";
import * as C from "../../Components";
import * as S from "./styles";

export const Form = () => {
  const [description, setDescription] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [activeOption, setActiveOption] = useState<"Entrada" | "Saída">(
    "Entrada"
  );

  const options: ("Entrada" | "Saída")[] = ["Entrada", "Saída"];

  return (
    <S.Container>
      <C.InputText
        label="Descrição"
        helperText="Ex: Compra de roupas"
        placeholder="Digite aqui sua descrição"
      />

      <div className="box-info">
        <C.InputValue label="Valor" placeholder="0" />
        <C.SelectType
          label="Tipo de valor"
          activeOption={activeOption}
          setActiveOption={setActiveOption}
          options={options}
        />
      </div>
    </S.Container>
  );
};
