import Setting from "assets/Setting.png";
import Top from "components/Common/Top";
import Nav from "components/Common/nav";

const SeniorSetting = () => {
  return (
    <div className="setting_container">
      <Top />
      <div className="setting_text">나희도님, 안녕하세요</div>
      <br></br>
      <br></br>
      <img className="setting_img" src={Setting} alt="React" />
      <Nav />
    </div>
  );
};
export default SeniorSetting;
