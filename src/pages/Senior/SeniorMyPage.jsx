import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "components/Common/nav";
import Top from "components/Common/Top";
import ProfileBack from "assets/SeniorMypage_img.png";
import ProfileTag from "components/Common/ProfileTag";
import ProfileTag2 from "components/Common/ProfileTag2";
import L_Mon from "assets/L_Mon.png";
import B_Mon from "assets/B_Mon.png";
import L_Tue from "assets/L_Tue.png";
import B_Tue from "assets/B_Tue.png";
import L_Wed from "assets/L_Wed.png";
import B_Wed from "assets/B_Wed.png";
import L_Thu from "assets/L_Thu.png";
import B_Thu from "assets/B_Thu.png";
import L_Fri from "assets/L_Fri.png";
import B_Fri from "assets/B_Fri.png";
import L_SatSun from "assets/L_SatSun.png";
import B_SatSun from "assets/B_SatSun.png";
import Line from "assets/Line.png";

const SeniorMyPage = () => {
  const navigate = useNavigate();
  const [detailInfo, setdetailInfo] = useState({
    one: "",
    self: "",
    q1: "",
    q2: "",
    q3: "",
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

  const [weekDay, setweekDay] = useState({
    mon: true,
    tue: true,
    wed: true,
    thu: true,
    fri: true,
    sat: true,
    sun: true,
  });

  const handleClickMon = () => {
    let changeDetail = { ...weekDay };
    changeDetail.mon = !weekDay.mon;
    setweekDay(changeDetail);
  };
  const handleClickTue = () => {
    let changeDetail = { ...weekDay };
    changeDetail.tue = !weekDay.tue;
    setweekDay(changeDetail);
  };
  const handleClickWed = () => {
    let changeDetail = { ...weekDay };
    changeDetail.wed = !weekDay.wed;
    setweekDay(changeDetail);
  };
  const handleClickThu = () => {
    let changeDetail = { ...weekDay };
    changeDetail.thu = !weekDay.thu;
    setweekDay(changeDetail);
  };
  const handleClickFri = () => {
    let changeDetail = { ...weekDay };
    changeDetail.fri = !weekDay.fri;
    setweekDay(changeDetail);
  };
  const handleClickSat = () => {
    let changeDetail = { ...weekDay };
    changeDetail.sat = !weekDay.sat;
    changeDetail.sun = !weekDay.sun;
    setweekDay(changeDetail);
  };

  return (
    <div>
      <Top />
      <div className="SeniorMypage_top">
        <div className="SeniorMypage_profile">
          <img className="SeniorMypage_img" src={ProfileBack} alt="React" />
          <div>????????????</div>
          <div>
            <button className="SeniorMypage_button">?????? ?????? ??????</button>
          </div>
        </div>
        <div className="SeniorMypage_tag">
          <div className="SeniorMypage_text">?????? ??????</div>
          <div className="SeniorMypage_smalltext">
            ????????? ???????????? ????????? ???????????????
          </div>
          <ProfileTag />
          <div className="SeniorMypage_smalltext">
            ????????? ???????????? ????????? ???????????????
          </div>
          <ProfileTag2 />
        </div>
      </div>
      <div className="SeniorMypage_bottom">
        <div className="SeniorMypage_text">?????? ??????</div>
        <input
          className="SeniorMypage_input"
          placeholder="????????? ????????? ??? ????????? ??? ?????? ????????? ???????????????"
          type="text"
          value={detailInfo.one}
          name="one"
          onChange={handleChangeDetail}
        />
        <div className="SeniorMypage_text">?????? ??????</div>
        <input
          className="SeniorMypage_input"
          placeholder="?????? ????????? ???????????? ??????????????? ????????? ??????????????????"
          type="text"
          value={detailInfo.self}
          name="self"
          onChange={handleChangeDetail}
        />
        <div className="SeniorMypage_text">??????1</div>
        <input
          className="SeniorMypage_input"
          placeholder="????????? ?????? ????????? ???????????????"
          type="text"
          value={detailInfo.q1}
          name="q1"
          onChange={handleChangeDetail}
        />
        <div className="SeniorMypage_text">??????2</div>
        <input
          className="SeniorMypage_input"
          placeholder="????????? ?????? ????????? ???????????????"
          type="text"
          value={detailInfo.q2}
          name="q2"
          onChange={handleChangeDetail}
        />
        <div className="SeniorMypage_text">??????3</div>
        <input
          className="SeniorMypage_input"
          placeholder="????????? ?????? ????????? ???????????????"
          type="text"
          value={detailInfo.q3}
          name="q3"
          onChange={handleChangeDetail}
        />
      </div>
      <div className="weektitle">
        <div>
          <img className="lineimg" src={Line} alt="React" />
        </div>
        <br></br>
        <div className="SeniorMypage_text">?????? ?????? ??????</div>
        <br></br>
      </div>
      <div className="weekDay">
        <div onClick={handleClickMon}>
          {weekDay.mon ? (
            <img className="weekimg" src={L_Mon} alt="React" />
          ) : (
            <img className="weekimg" src={B_Mon} alt="React" />
          )}
        </div>
        <div onClick={handleClickTue}>
          {weekDay.tue ? (
            <img className="weekimg" src={L_Tue} alt="React" />
          ) : (
            <img className="weekimg" src={B_Tue} alt="React" />
          )}
        </div>
        <div onClick={handleClickWed}>
          {weekDay.wed ? (
            <img className="weekimg" src={L_Wed} alt="React" />
          ) : (
            <img className="weekimg" src={B_Wed} alt="React" />
          )}
        </div>
        <div onClick={handleClickThu}>
          {weekDay.thu ? (
            <img className="weekimg" src={L_Thu} alt="React" />
          ) : (
            <img className="weekimg" src={B_Thu} alt="React" />
          )}
        </div>
        <div onClick={handleClickFri}>
          {weekDay.fri ? (
            <img className="weekimg" src={L_Fri} alt="React" />
          ) : (
            <img className="weekimg" src={B_Fri} alt="React" />
          )}
        </div>
        <div onClick={handleClickSat}>
          {weekDay.sat ? (
            <img className="weekimg" src={L_SatSun} alt="React" />
          ) : (
            <img className="weekimg" src={B_SatSun} alt="React" />
          )}
        </div>
      </div>
      <br></br>
      <div className="weekDay">
        <input
          className="Time_input"
          placeholder="00:00"
          type="text"
          value={timeInfo.t1}
          name="t1"
          onChange={handleChangeTime}
        />
        <div>~</div>
        <input
          className="Time_input"
          placeholder="24:00"
          type="text"
          value={timeInfo.t2}
          name="t2"
          onChange={handleChangeTime}
        />
      </div>
      <br></br>
      <div className="weekDay">
        <input
          className="Time_input"
          placeholder="00:00"
          type="text"
          value={timeInfo.t3}
          name="t3"
          onChange={handleChangeTime}
        />
        <div>~</div>
        <input
          className="Time_input"
          placeholder="24:00"
          type="text"
          value={timeInfo.t4}
          name="t4"
          onChange={handleChangeTime}
        />
      </div>
      <div className="mypage_button">
        <button
          onClick={() => {
            navigate("/senior/mypage");
          }}
          className="login_button"
        >
          ?????? ??????
        </button>
      </div>
      <div className="navSpace"></div>
      <Nav />
    </div>
  );
};

export default SeniorMyPage;
