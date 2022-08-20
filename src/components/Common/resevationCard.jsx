import styled from "styled-components";

const ReservationCard = (props) => {
  const { name, starNo, job, timeStamp, comment } = props;

  return (
    <StReservationCard>
      <StName>{name}</StName>
      {/* <StStar></StStar> */}
      <StDetail>- {job}</StDetail>
      <StDetail>- {timeStamp}</StDetail>
      <StDetail>- {comment}</StDetail>
      <StEnterBtn>입장하기</StEnterBtn>
    </StReservationCard>
  );
};

export default ReservationCard;

const StReservationCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 318px;
  height: 94px;

  background: #f3f3f3;
  border-radius: 8px;

  margin-left: 27px;
`;

const StName = styled.strong`
  padding: 10px 0 7px 9px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.01em;

  color: #202e5f;
`;

const StDetail = styled.p`
  margin: 6px 0 0 6px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 11.4146px;
  line-height: 11px;
  letter-spacing: -0.01em;

  color: rgba(32, 46, 95, 0.7);
`;

const StEnterBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  margin: 29px 0 0 228px;

  width: 71px;
  height: 36.81px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 11px;
  letter-spacing: -0.02em;
  color: white;

  background: #6661e6;
  border-radius: 17.5309px;

  cursor: pointer;
`;
