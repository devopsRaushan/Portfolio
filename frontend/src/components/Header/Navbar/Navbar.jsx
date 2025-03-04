import NavigationButton from "./NavigationButton";
import Logo from "./Logo";
import IconLogo from "./IconLogo";

function Navbar() {
  return (
    <div className="Head_header flex">
      <div className="flex__logo">
        <IconLogo />
        <Logo />
      </div>
      <div className="flex__button">
        <NavigationButton />
      </div>
    </div>
  );
}
export default Navbar;
