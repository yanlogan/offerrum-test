import "./App.scss";
import Button from "./components/Button/Button";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";

function App() {
  return (
    <>
      <Hero />
      <Info />
      <Button type="primary">Личный кабинет</Button>
      <Button type="accent">Начать зарабатывать на NFT</Button>
      <button>Просто кнопка</button>
    </>
  );
}

export default App;
