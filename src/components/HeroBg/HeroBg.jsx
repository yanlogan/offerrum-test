import "./HeroBg.scss";

import businessman from "../../assets/images/businessman.png";
import piggy from "../../assets/images/piggy.png";
import lightning1 from "../../assets/images/lightning-1.svg";
import lightning2 from "../../assets/images/lightning-2.svg";
import gradientCircleGreen from "../../assets/images/gradientCircleGreen.svg";
import money from "../../assets/images/money.png";
import emoji from "../../assets/images/emoji-hero.png";

const HeroBg = () => {
  return (
    <div className="HeroBg">
      <div className="HeroBg__content">
        <img
          src={gradientCircleGreen}
          alt="gradientCircleGreen"
          className="HeroBg__gradientCircleGreen"
        />
        <img src={piggy} alt="piggy" className="HeroBg__piggy" />
        <img src={emoji} alt="emoji" className="HeroBg__emoji" />
        <div className="HeroBg__gradient"></div>
        <img
          src={businessman}
          alt="businessman"
          className="HeroBg__businessman"
        />
        <img src={money} alt="money" className="HeroBg__money" />
        <img src={lightning1} alt="lightning1" className="HeroBg__lightning1" />
        <img src={lightning2} alt="lightning2" className="HeroBg__lightning2" />
      </div>
    </div>
  );
};

export default HeroBg;
