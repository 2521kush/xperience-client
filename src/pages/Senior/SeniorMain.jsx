import { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "components/Common/nav";
import icBell from "assets/ic_home_bell.png";
import ReservationCard from "components/Common/resevationCard";

const SeniorMain = () => {
  const [reservationData, setReservationData] = useState({
    userInfo: [
      {
        Name: "백이진",
        StarNo: 3,
        Job: "UX 디자이너",
        TimeStamp: "8월 20일 15:00-16:00",
        Comment: "디자이너도 코딩을 배워야 하는지 궁금해요.",
      },
      {
        Name: "djbf",
        StarNo: 3,
        Job: "UX 디자이너",
        TimeStamp: "8월 20일 15:00-16:00",
        Comment: "디자이너도 코딩을 배워야 하는지 궁금해요.",
      },
    ],
  });

  useEffect(() => {
    console.log("reservationData", reservationData);
  }, []);

  return (
    <StSeniorMain>
      <StLogoHeader>
        <img src={icBell} alt="알림" />
      </StLogoHeader>
      <StTitleHeader>
        <StPurpleBox>
          <StTitleText>
            퇴직 후 나의 소중한 경험을 <br />
            주니어에게 공유하자!
          </StTitleText>
        </StPurpleBox>
      </StTitleHeader>
      <StReservationContainer>
        <StLabel>예정 미팅</StLabel>
        <div>
          {reservationData.userInfo.map(
            ({ Name, StarNo, Job, TimeStamp, Comment }) => (
              <ReservationCard
                name={Name}
                starNo={StarNo}
                job={Job}
                timeStamp={TimeStamp}
                comment={Comment}
              />
            )
          )}
        </div>
      </StReservationContainer>
      <Nav />
    </StSeniorMain>
  );
};
export default SeniorMain;

const StSeniorMain = styled.div`
  width: 375px;
`;

const StLogoHeader = styled.div`
  width: 375px;
  height: 37px;

  & > img {
    width: 19px;
    height: 19px;
    float: right;
    margin: 14px 18px 0 0;
  }

  background: rgba(102, 97, 230, 0.15);
`;

const StTitleHeader = styled.div`
  height: 145px;
  width: 375px;
`;

const StPurpleBox = styled.div`
  height: 123px;
  width: 375px;
  background: rgba(102, 97, 230, 0.15);
`;

const StTitleText = styled.h1`
  padding: 56px 0 0 30px;
  margin: 0px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: #202e5f;
`;

const StReservationContainer = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  margin-bottom: 30px;
`;

const StLabel = styled.h2`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: #202e5f;

  margin-left: 30px;
`;
