import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className="sec-header">
          <div className="logo">
            <img src={logo} alt="pokemon logo" />
            <Link to="/pokemons">Pokemons</Link>
            <Link>Types</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
