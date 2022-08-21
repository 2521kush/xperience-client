import React from 'react';
import OnBoarding4img from "assets/OnBoarding4img.png";
import { useNavigate } from "react-router-dom";

const OnBoarding4 = () => {
  const navigate = useNavigate();
  return (
    <div className = "Onboarding_container">
        <img className="OnBoarding" src={OnBoarding4img} alt="React" />
        <div className='loginbutton'>
          <button onClick={()=>{navigate('/login')}} className='login_button'>
            시작하기
          </button>
        </div>
    </div>
  )
};

export default OnBoarding4;