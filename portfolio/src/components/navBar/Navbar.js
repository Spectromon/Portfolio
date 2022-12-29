import ThemeButton from "../themeButton/ThemeButton";
import "./NavBar.scss";

function Navbar() {
  return (
    <>
      <div className="navbar__outerContainer">
        <div>Portfolio</div>
        <ThemeButton />
      </div>
    </>
  );
}

export default Navbar;
