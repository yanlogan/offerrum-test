import Button from "../Button/Button";
import Container from "../Container/Container";
import HeroBg from "../HeroBg/HeroBg";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="Hero">
      <Container>
        <div className="Hero__wrapper">
          <HeroBg />
          <div className="Hero__text">
            <h1 className="Hero__title">
              Не&nbsp;упусти возможность войти в&nbsp;
              <strong>прибыльную нишу</strong>
            </h1>
            <p className="Hero__subtitle">
              Получи все&nbsp;нужные навыки для&nbsp;заработка на&nbsp;NFT всего
              за&nbsp;28&nbsp;дней!
            </p>
          </div>
          <Button type="accent">Начать зарабатывать на&nbsp;NFT</Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
