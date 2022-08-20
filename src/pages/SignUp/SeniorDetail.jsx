import React, {useState} from 'react';
import {useCookies} from 'react-cookie';
import { useNavigate } from "react-router-dom";
import {Box, TextField, IconButton, InputAdornment } from '@mui/material';

const SeniorDetail = () => {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        company: '',
        job: '',
    });
    const handleChangeSignUp = (event) => {
      let changeSignUp = {...signup};
      changeSignUp[event.target.name] = event.target.value;
      setSignup(changeSignUp);
    };
   
    const handleClickSignUpMove = () => {
      if (signup.company!=''&& signup.job!=''){
        navigate('/senior')
      }
    }

    return (
    <div className='container'>
        <div className='signup_title'>회원가입</div>
        <br></br>
        <div className="name_text">회사</div>
        <Box
            className = 'login_box'
            component="form"
            sx={{width: 500, maxWidth: '100%',}}
        >
        <TextField 
            placeholder="근무했던 회사를 작성해주세요"
            value={signup.company} 
            name='company'
            onChange={handleChangeSignUp} 
            fullWidth id="standard-basic" 
        />
        </Box>
        <br></br>
        <div className="name_text">직군</div>
        <Box
            className = 'login_box'
            component="form"
            sx={{width: 500, maxWidth: '100%',}}
        >
        <TextField 
            placeholder="근무했던 직군을 작성해주세요"
            value={signup.job} 
            name='job'
            onChange={handleChangeSignUp} 
            fullWidth id="standard-basic" 
        />
        </Box>
        <div className='loginbutton'>
          <button onClick={handleClickSignUpMove} className='login_button'>
            다음
          </button>
        </div>
    </div>
  );
};

export default SeniorDetail;