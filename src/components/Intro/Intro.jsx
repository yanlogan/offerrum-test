import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import "./Intro.scss";

const Intro = () => {
  return (
    <section className="Intro">
      <div className="Intro__content">
        <Header />
        <Hero />
      </div>
    </section>
  );
};

export default Intro;
