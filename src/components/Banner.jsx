import logo from "../assets/GloboLogo.png";

const Banner = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" width="1000" height="1000" />
      </div>
      <div>Providing houses all over the world!</div>
    </header>
  );
};

export default Banner;
