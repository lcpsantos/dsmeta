import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          App desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/lcpsantos/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Luiz César Pacheco dos Santos{" "}
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
