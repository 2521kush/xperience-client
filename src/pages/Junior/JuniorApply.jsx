import React, {useState} from 'react'
import JuniorApply_1 from "assets/JuniorApply_1.png";
import JuniorApply_2 from "assets/JuniorApply_2.png";
import JuniorApply_3 from "assets/JuniorApply_3.png";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Top from 'components/Common/Top';
import CircleY from "assets/CircleY.png";
import CircleW from "assets/CircleW.png";
import { useNavigate } from "react-router-dom";
import Nav from 'components/Common/nav';
import Modal from 'components/Junior/Modal';
import modal1 from "assets/modal1.png";
import modal2 from "assets/modal2.png";
import modal3 from "assets/modal3.png";

const JuniorApply = () => {
    const navigate = useNavigate();
    const [startdate, setStartDate] = useState(new Date());

    const [weekDay, setweekDay] = useState({
        mon: true,
        tue: true,
        wed: false,
        thu: false,
        fri: true,
        sat: true,
        sun: true,
      });
    const [timeInfo, settimeInfo] = useState({
        t1: '09:00',
        t2: '10:00',
        t3: '18:00',
        t4: '19:00'
    });


    const [ColoredSenior, setColoredSenior] = useState(true);
    const handleClickColoredSenior = () => {
      if (ColoredJunior===false){
        setColoredJunior(!ColoredJunior);
        setColoredSenior(!ColoredSenior);
      }else{
        setColoredSenior(!ColoredSenior);
      }
    };
  
    const [ColoredJunior, setColoredJunior] = useState(true);
    const handleClickColoredJunior = () => {
      if (ColoredSenior===false){
        setColoredSenior(!ColoredSenior);
        setColoredJunior(!ColoredJunior);
      }else{
        setColoredJunior(!ColoredJunior);
      }
    };


    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
      navigate('/junior/schedule');
    };
  return (
    <div>
        <Top/>
        <br></br><br></br><br></br><br></br>
        <div className='applyContainer'>
            <div>
                <img className="title" src={JuniorApply_1} alt="React" />
                <div className='weektitle'>
            <div>
            </div>
                <br></br>
            </div>
            <div className ="applyweekDay">
                <div>
                    {weekDay.mon
                    ?<img className="weekimg" src={L_Mon} alt="React" />
                    :<img className="weekimg" src={B_Mon} alt="React" />
                    }
                </div>
                <div>
                    {weekDay.tue
                    ?<img className="weekimg" src={L_Tue} alt="React" />
                    :<img className="weekimg" src={B_Tue} alt="React" />
                    }
                </div>
                <div>
                    {weekDay.wed
                    ?<img className="weekimg" src={L_Wed} alt="React" />
                    :<img className="weekimg" src={B_Wed} alt="React" />
                    }
                </div>
                <div>
                    {weekDay.thu
                    ?<img className="weekimg" src={L_Thu} alt="React" />
                    :<img className="weekimg" src={B_Thu} alt="React" />
                    }
                </div>
                <div>
                    {weekDay.fri
                    ?<img className="weekimg" src={L_Fri} alt="React" />
                    :<img className="weekimg" src={B_Fri} alt="React" />
                    }
                </div>
                <div>
                    {weekDay.sat
                    ?<img className="weekimg" src={L_SatSun} alt="React" />
                    :<img className="weekimg" src={B_SatSun} alt="React" />
                    }
                </div>
            </div>
            <br></br>
            <div className ="applyweekDay">
                <input 
                className = "Time_input"
                type="text" 
                value={timeInfo.t1} 
                name="t1"
                />
                <div>~</div>
                <input 
                className = "Time_input"
                type="text" 
                value={timeInfo.t2} 
                name="t2"
                />
            </div>
            <br></br>
            <div className ="applyweekDay">
                <input 
                className = "Time_input"
                type="text" 
                value={timeInfo.t3} 
                name="t3"
                />
                <div>~</div>
                <input 
                className = "Time_input"
                type="text" 
                value={timeInfo.t4} 
                name="t4"
                />
            </div>
            </div>
            <br></br><br></br>
            <div>
                <img className="title" src={JuniorApply_2} alt="React" />
                <DatePicker 
                    dateFormat="yyyy년 MM월 dd일"
                    selected = {startdate} 
                    onChange={date => setStartDate(date)}
                />
            </div>
            <br></br><br></br>
            <div>
                <img className="title" src={JuniorApply_3} alt="React" />
                <div className = "timecheckbox">
                <div className = "checker" onClick={handleClickColoredJunior}>
                    {ColoredJunior
                    ?<img className="checkcircle" src={CircleW} alt="React" />
                    :<img className="checkcircle" src={CircleY} alt="React" />
                    }
                    {`${timeInfo.t1} ~ ${timeInfo.t2}`}
                </div>
                <div className = "checker" onClick={handleClickColoredSenior}>
                    {ColoredSenior
                    ?<img className="checkcircle" src={CircleW} alt="React" />
                    :<img className="checkcircle" src={CircleY} alt="React" />
                    }
                    {`${timeInfo.t3} ~ ${timeInfo.t4}`}
                </div>
                </div>
            </div>
        </div>
            <div className="mypage_button">
            <button onClick={openModal} className='login_button'>
                저장 하기
            </button>
            <Modal open={modalOpen} close={closeModal} header="미팅 예약">
            <div className = "modal_container">
                <div className = "modal_contents">
                    <img className="minititle" src={modal1} alt="React" />
                    <div>
                        {`${startdate.getFullYear()}년 ${startdate.getMonth()+1}월 ${startdate.getDate()}일`}
                    </div>
                </div>
                <div  className = "modal_contents">
                    <img className="minititle" src={modal2} alt="React" />
                    <div>
                        {ColoredJunior
                            ?`${timeInfo.t3} ~ ${timeInfo.t4}`
                            :`${timeInfo.t1} ~ ${timeInfo.t2}`
                        }
                    </div>
                    
                </div>
                <div  className = "modal_contents">
                    <img className="minititle" src={modal3} alt="React" />
                    <div>https://www.X-p.com</div>
                </div>
                
            </div>
            </Modal>
        </div>
        <div className = "navSpace"></div>
        <Nav />
    </div>

  );
};

export default JuniorApply;