import * as S from "./styles";

export const NoTransactions = () => {
  const variants = (delay: number) => {
    return {
      transition: {
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
      },
      initial: {
        x: 100,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
      },
    };
  };

  return (
    <S.Container>
      <h2>Você não possui nenhum lançamento</h2>

      <S.BoxCard
        style={{ animationDuration: "3s" }}
        transition={variants(1).transition}
        initial={variants(1).initial}
        animate={variants(1).animate}
      >
        <div className="box-border" />
        <div className="box-description">
          <div className="box-1" />
          <div className="box-2" />
        </div>
      </S.BoxCard>

      <S.BoxCard
        style={{ animationDuration: "4s" }}
        transition={variants(1.5).transition}
        initial={variants(1.5).initial}
        animate={variants(1.5).animate}
      >
        <div className="box-border" />
        <div className="box-description">
          <div className="box-1" />
          <div className="box-2" />
        </div>
      </S.BoxCard>

      <S.BoxCard
        style={{ animationDuration: "5s" }}
        transition={variants(2).transition}
        initial={variants(2).initial}
        animate={variants(2).animate}
      >
        <div className="box-border" />
        <div className="box-description">
          <div className="box-1" />
          <div className="box-2" />
        </div>
      </S.BoxCard>
    </S.Container>
  );
};
