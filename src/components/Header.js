import logo from "./haphomelogo.jpg";

function Header() {
  return (
    <div>
      <img className="top-logo" src={logo} alt="toppagelogo" />
      <h1>Welcome to Happy Home Companionship!</h1>
    </div>
  );
}

export default Header;
