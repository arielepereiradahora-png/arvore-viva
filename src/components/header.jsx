
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#inicio">
        <span>🌳</span>
        <h1>Árvore Viva</h1>
      </a>

      <nav>
        <a href="#inicio">Início</a>
        <a href="#arvores">Árvores</a>
        <a href="#sobre">Sobre</a>
      </nav>
    </header>
  );
}

export default Header;
