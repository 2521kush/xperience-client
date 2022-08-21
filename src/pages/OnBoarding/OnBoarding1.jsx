import React from 'react';
import OnBoarding1img from "assets/OnBoarding1img.png";
import { useNavigate } from "react-router-dom";

const OnBoarding1 = () => {
  const navigate = useNavigate();
  return (
    <div className = "Onboarding_container">
        <img className="OnBoarding" src={OnBoarding1img} alt="React" />
        <div className='loginbutton'>
          <button onClick={()=>{navigate('/step2')}} className='login_button'>
            다음
          </button>
        </div>
    </div>
  )
};

export default OnBoarding1;