import * as C from "../../Components";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useTransactions } from "../../Contexts";

export const Form = () => {
  const [description, setDescription] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [activeOption, setActiveOption] = useState<"Entrada" | "Saída">(
    "Entrada"
  );

  const { addTransaction } = useTransactions();

  const options: ("Entrada" | "Saída")[] = ["Entrada", "Saída"];

  const resetEntry = () => {
    setDescription("");
    setValue("");
    setActiveOption("Entrada");
  };

  const handleInsertValue = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value || !description) {
      toast.error("Preencha todos os campos!");
      return;
    }

    if (+value <= 0) {
      toast.error("Digite um valor válido!");
      return;
    }

    const transaction = {
      id: uuidv4(),
      description,
      value: activeOption === "Entrada" ? +value : -value,
      type: activeOption,
    };

    addTransaction(transaction);
    resetEntry();
  };

  return (
    <S.Container onSubmit={handleInsertValue}>
      <C.InputText
        label="Descrição"
        helperText="Ex: Compra de roupas"
        placeholder="Digite aqui sua descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="box-info">
        <C.InputValue
          label="Valor"
          placeholder="0"
          value={value.toString()}
          onChange={(e) => setValue(e.target.value)}
        />
        <C.SelectType
          label="Tipo de valor"
          activeOption={activeOption}
          setActiveOption={setActiveOption}
          options={options}
        />
      </div>

      <C.Button type="submit">Inserir valor</C.Button>
    </S.Container>
  );
};
