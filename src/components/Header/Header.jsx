import "./Header.scss";
import winter from "../../assets/winter.jpg";

export default function Header() {
  return (
    <header className="header">
      <img
        src={winter}
        alt="winter mountains landscape "
        className="header__img"
      />
    </header>
  );
}
