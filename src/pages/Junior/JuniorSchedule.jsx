import React from 'react';
import juniorSchedule from "assets/juniorSchedule.png";
import { useNavigate } from "react-router-dom";
import Top from 'components/Common/Top';
import Nav from 'components/Common/nav';

function JuniorSchedule() {
  return (
    <div>
      <Top/>
      <div className = "Onboarding_container">
        <img className="OnBoarding" src={juniorSchedule} alt="React" />
      </div>
      <Nav/>
    </div>
  )
}

export default JuniorSchedule