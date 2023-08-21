import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <Container>
        <div className="Header__wrapper">
          <Logo />
          <nav className="Header__nav">
            <ul>
              <li className="Header__navItem">
                <a href="/">Главная</a>
              </li>
              <li className="Header__navItem">
                <a href="#info">Что&nbsp;даст&nbsp;обучение</a>
              </li>
            </ul>
            <Button type="primary">Личный&nbsp;кабинет</Button>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
