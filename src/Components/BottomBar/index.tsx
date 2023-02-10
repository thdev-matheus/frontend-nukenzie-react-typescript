import * as S from "./styles";
import * as T from "./types";

export const BottomBar = ({ setIsOpen, children }: T.IBottomBarProps) => {
  return (
    <S.Container>
      <S.BoxDead onClick={() => setIsOpen(false)} />
      <S.BoxChildren
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
      >
        {children}
      </S.BoxChildren>
    </S.Container>
  );
};
