import React from 'react';
import OnBoarding3img from "assets/OnBoarding3img.png";
import { useNavigate } from "react-router-dom";

const OnBoarding3 = () => {
  const navigate = useNavigate();
  return (
    <div className = "Onboarding_container">
        <img className="OnBoarding" src={OnBoarding3img} alt="React" />
        <div className='loginbutton'>
          <button onClick={()=>{navigate('/step4')}} className='login_button'>
            다음
          </button>
        </div>
    </div>
  )
};

export default OnBoarding3;