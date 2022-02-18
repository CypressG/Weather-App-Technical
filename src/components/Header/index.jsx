import SearchBar from "../SearchBar/index";
import Logo from "../Logo/index";
import "./style.scss";

const Header = () => (
  <div id="header-container">
    <Logo />
    <SearchBar />
  </div>
);

export default Header;
