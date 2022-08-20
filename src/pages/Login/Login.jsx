import React, {useState} from 'react';
import {useCookies} from 'react-cookie';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Box, TextField, Checkbox, IconButton, FormGroup, FormControlLabel, Button, InputAdornment } from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';

const Login = () => {
    const [cookies, setCookie,] = useCookies(['loginkey']);
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        id: 'aaa',
        password: ''     
    });

    const handleChangeLogin = (event) => {
        let changeLogin = {...login};
        changeLogin[event.target.name] = event.target.value;
        setLogin(changeLogin);
    };
    const handleClickLogin = async() =>{
        const formData = new FormData();
        formData.append('Id', login.id);
        formData.append('Password', login.password);
        const config = {
            headers: {
                "content-type": "multipart.form-data"
            }
        }
        await axios.post("/api/users/login", formData, config).then((response)=>{
            if(response.data.login === false){
                alert('아이디와 비밀번호를 다시 확인해주세요')
            }
            else if (response.data.login === true){
                setCookie("loginkey", response.data.user._id, {path : '/'})
                navigate('/senior')
            }
        }).catch((Error)=>{
            console.log(Error);
        })
    };
    
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

  return (
    <div className='container'>

        <div className='login_title'>로그인</div>
        <br></br>
        <Box
                className = 'login_box'
                component="form"
                sx={{width: 500, maxWidth: '100%',}}
            >
            <TextField 
                placeholder="이메일 주소 또는 아이디"
                value={login.id} 
                name='id'
                onChange={handleChangeLogin} 
                fullWidth id="standard-basic" 
            />
        </Box>
        <br></br>
        <Box
                className = 'login_box'
                component="form"
                sx={{width: 500, maxWidth: '100%',}}
            > 
            <TextField 
                placeholder="패쓰워드"
                type={showPassword ? 'text' : 'password'}
                value={login.password} 
                name='password'
                onChange={handleChangeLogin} 
                fullWidth id="standard-basic"
                InputProps={{
                   endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </Box>

        <FormGroup>
            <FormControlLabel 
                control={<Checkbox defaultChecked />} 
                label="로그인 상태 유지" 
            />
        </FormGroup>
        <br></br>
        <div className='text1' onClick={()=>{navigate('/signup')}}>아이디 찾기 | 비밀번호 재설정 | 회원가입</div>
        

        <div className='loginbutton'>
          <button className='login_button'>
            로그인
          </button>
        </div>

    </div>
    
  )
};

export default Login;