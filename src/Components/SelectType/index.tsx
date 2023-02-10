import * as T from "./types";
import * as S from "./styles";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export const SelectType = ({
  label,
  activeOption,
  options,
  setActiveOption,
}: T.ISelectTypeProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Container>
      <span>{label}</span>
      <div className="select-box" onClick={() => setIsOpen(!isOpen)}>
        <span>{activeOption}</span>
        <IoIosArrowDown />
      </div>
      {isOpen && (
        <S.BoxOptions
          transition={{
            duration: 4,
            type: "spring",
            stiffness: 100,
          }}
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          {options.map((opt, index) => (
            <span
              key={index}
              onClick={() => {
                setActiveOption(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </span>
          ))}
        </S.BoxOptions>
      )}
    </S.Container>
  );
};
