import React, { useState } from "react";
import Nav from "components/Common/nav";
import Top from "components/Common/Top";
import ProfileBack from "assets/JuniorMypage_img.png";
import ProfileTag from "components/Common/ProfileTag";
import ProfileTag2 from "components/Common/ProfileTag2";
import Line from "assets/Line.png";
import { useNavigate } from "react-router-dom";

const JuniorMyPage = () => {
  const navigate = useNavigate();
  const [detailInfo, setdetailInfo] = useState({
    one: "",
    self: "",
    com: "",
    job: "",
  });

  const [timeInfo, settimeInfo] = useState({
    t1: "",
    t2: "",
    t3: "",
    t4: "",
  });
  const handleChangeDetail = (event) => {
    let changeDetail = { ...detailInfo };
    changeDetail[event.target.name] = event.target.value;
    setdetailInfo(changeDetail);
  };
  const handleChangeTime = (event) => {
    let changeDetail = { ...detailInfo };
    changeDetail[event.target.name] = event.target.value;
    settimeInfo(changeDetail);
  };

  return (
    <div>
      <Top />
      <div className="SeniorMypage_top">
        <div className="SeniorMypage_profile">
          <img className="SeniorMypage_img" src={ProfileBack} alt="React" />
          <div>김동현님</div>
        </div>
        <div className="SeniorMypage_tag">
          <div className="SeniorMypage_text">태그 설정</div>
          <div className="SeniorMypage_smalltext">
            역량을 소개하는 태그를 설정하세요
          </div>
          <ProfileTag />
          <div className="SeniorMypage_smalltext">
            성격을 소개하는 태그를 설정하세요
          </div>
          <ProfileTag2 />
        </div>
      </div>
      <div className="SeniorMypage_bottom">
        <div className="SeniorMypage_text">어려움 한줄 소개</div>
        <input
          className="SeniorMypage_input"
          placeholder="직무 관련 어려움을 겪고 있는 문제점을 적어주세요"
          type="text"
          value={detailInfo.one}
          name="one"
          onChange={handleChangeDetail}
        />
        <div className="SeniorMypage_text">자기 소개</div>
        <input
          className="SeniorMypage_input"
          placeholder="시니어에게 직무 관련해 관심있는 파트를 알려주세요"
          type="text"
          value={detailInfo.self}
          name="self"
          onChange={handleChangeDetail}
        />
      </div>
      <div className="weektitle">
        <div>
          <img className="lineimg" src={Line} alt="React" />
        </div>
        <br></br>
        <div className="SeniorMypage_text">관심 분야</div>
      </div>
      <div className="SeniorMypage_bottom">
        <div className="SeniorMypage_text">관심 회사</div>
        <input
          className="SeniorMypage_input"
          placeholder="삼성전자/구글/아마존"
          type="text"
          value={detailInfo.com}
          name="com"
          onChange={handleChangeDetail}
        />
        <div className="SeniorMypage_text">관심 직군</div>
        <input
          className="SeniorMypage_input"
          placeholder="UXUI/그래픽 디자인/일러스트"
          type="text"
          value={detailInfo.job}
          name="job"
          onChange={handleChangeDetail}
        />
      </div>
      <div className="mypage_button">
        <button
          onClick={() => {
            navigate("/junior/mypage");
          }}
          className="login_button"
        >
          저장 하기
        </button>
      </div>
      <div className="navSpace"></div>
      <Nav />
    </div>
  );
};

export default JuniorMyPage;
