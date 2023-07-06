import "./Header.css";
import arrow from "../../assets/ARROW.svg";
import bell from "../../assets/off.svg";

const Header = () => {
  return (
    <div className="pop_header">
      <img src={arrow} alt="arrow" />
      <h3 className="pop_header_title">자유톡</h3>
      <img src={bell} alt="bell" />
    </div>
  );
};

export default Header;
