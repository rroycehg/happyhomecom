import logo from "./haphomelogo1.jpg";

function Header() {
  return (
    <div className="header">
      <img className="top-logo" src={logo} alt="toppagelogo" />
      <p>Start of a New APP</p>
    </div>
  );
}

export default Header;
