import logo from "../assets/GloboLogo.png";
import { logo as logoClass } from "./Banner.module.css";

const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "xx-large",
  color: "coral",
};
const Banner = ({ headerText }) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src={logo} alt="logo" className={logoClass} />
      </div>
      <div className="col-7 mt-12" style={subtitleStyle}>
        {headerText}
      </div>
    </header>
  );
};

export default Banner;
