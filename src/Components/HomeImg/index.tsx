import * as S from "./styles";
import bigCircle from "../../Assets/Images/entry-image/big-circle.png";
import mediumCircle from "../../Assets/Images/entry-image/medium-circle.png";
import smallCircle from "../../Assets/Images/entry-image/small-circle.png";
import sheet from "../../Assets/Images/entry-image/sheet.png";
import smallCard from "../../Assets/Images/entry-image/small-card.png";
import bigCard from "../../Assets/Images/entry-image/big-card.png";

export const HomeImg = () => {
  const circleVariants = (delay: number) => {
    return {
      transition: {
        duration: 1,
        delay,
        type: "spring",
        stiffness: 100,
      },
      initial: {
        scale: 0,
        opacity: 0,
      },
      animate: {
        scale: 1,
        opacity: 1,
      },
    };
  };

  const sheetVariants = (delay: number) => {
    return {
      transition: {
        duration: 1.7,
        delay,
        ease: "easeInOut",
      },
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
    };
  };

  const cardVariants = (delay: number, isLeft: boolean) => {
    return {
      transition: {
        duration: 1.5,
        delay,
        type: "spring",
        stiffness: 100,
      },
      initial: {
        opacity: 0,
        y: isLeft ? -50 : 50,
      },
      animate: {
        opacity: 1,
        y: 0,
      },
    };
  };

  return (
    <S.Container>
      <S.BigCircle
        src={bigCircle}
        alt="big-circle"
        transition={circleVariants(0).transition}
        initial={circleVariants(0).initial}
        animate={circleVariants(0).animate}
      />

      <S.MediumCircle
        src={mediumCircle}
        alt="medium-circle"
        transition={circleVariants(0.3).transition}
        initial={circleVariants(0.3).initial}
        animate={circleVariants(0.3).animate}
      />

      <S.SmallCircle
        src={smallCircle}
        alt="small-circle"
        transition={circleVariants(0.6).transition}
        initial={circleVariants(0.6).initial}
        animate={circleVariants(0.6).animate}
      />

      <S.Sheet
        src={sheet}
        alt="sheet"
        transition={sheetVariants(1.2).transition}
        initial={sheetVariants(1.2).initial}
        animate={sheetVariants(1.2).animate}
      />

      <S.SmallCard
        src={smallCard}
        alt="small-card"
        transition={cardVariants(1.5, false).transition}
        initial={cardVariants(1.5, false).initial}
        animate={cardVariants(1.5, false).animate}
      />

      <S.BigCard
        src={bigCard}
        alt="big-card"
        transition={cardVariants(1.8, true).transition}
        initial={cardVariants(1.8, true).initial}
        animate={cardVariants(1.8, true).animate}
      />
    </S.Container>
  );
};
