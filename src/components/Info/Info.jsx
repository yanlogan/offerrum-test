import Container from "../Container/Container";
import InfoCard from "../InfoCard/InfoCard";
import "./Info.scss";

import emojiStars from "../../assets/images/emoji-stars.png";
import emojiStarsBlurred from "../../assets/images/emoji-stars-blurred.png";
import emojiCool from "../../assets/images/emoji-cool.png";
import emojiCoolBlurred from "../../assets/images/emoji-cool-blurred.png";
import emojiCrazy from "../../assets/images/emoji-crazy.png";
import emojiCrazyBlurred from "../../assets/images/emoji-crazy-blurred.png";
import emojiMoney from "../../assets/images/emoji-money.png";
import emojiMoneyBlurred from "../../assets/images/emoji-money-blurred.png";

const Info = () => {
  return (
    <section className="Info">
      <Container>
        <div className="Info__wrapper">
          <h2 className="Info__title">Что&nbsp;даст тебе обучение?</h2>
          <div className="Info__cards">
            <InfoCard image={emojiStars} imageBlurred={emojiStarsBlurred}>
              Откроешь свой первый криптокошелек и&nbsp;научишься
              с&nbsp;ним&nbsp;работать
            </InfoCard>
            <InfoCard image={emojiCrazy} imageBlurred={emojiCrazyBlurred}>
              Поймёшь, как&nbsp;выбирать правильные дропы
            </InfoCard>
            <InfoCard image={emojiMoney} imageBlurred={emojiMoneyBlurred}>
              Построишь план по&nbsp;быстрому приумножению заработанных средств
            </InfoCard>
            <InfoCard image={emojiCool} imageBlurred={emojiCoolBlurred}>
              Узнаешь кто&nbsp;такие холдеры и&nbsp;флипперы
            </InfoCard>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Info;
