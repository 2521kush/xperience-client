import React from "react";
import seniorSchedule from "assets/seniorSchedule.png";
import { useNavigate } from "react-router-dom";
import Top from "components/Common/Top";
import Nav from "components/Common/nav";

const SeniorSchedule = () => {
  return (
    <div>
      <Top />
      <div className="Onboarding_container">
        <img className="OnBoarding" src={seniorSchedule} alt="React" />
      </div>
      <Nav />
    </div>
  );
};

export default SeniorSchedule;
