import React from 'react';
import OnBoarding2img from "assets/OnBoarding2img.png";
import { useNavigate } from "react-router-dom";

const OnBoarding2 = () => {
  const navigate = useNavigate();
  return (
    <div className = "Onboarding_container">
        <img className="OnBoarding" src={OnBoarding2img} alt="React" />
        <div className='loginbutton'>
          <button onClick={()=>{navigate('/step3')}} className='login_button'>
            다음
          </button>
        </div>
    </div>
  )
};

export default OnBoarding2;