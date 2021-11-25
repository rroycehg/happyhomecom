import logo from "./haphomelogo1.jpg";

function Header() {
  return (
    <div className="header">
      <img className="top-logo" src={logo} alt="toppagelogo" />
      <p>Happy Home Companionship</p>
    </div>
  );
}

export default Header;
