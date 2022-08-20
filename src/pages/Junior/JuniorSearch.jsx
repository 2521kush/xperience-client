import WhiteCard from "components/Common/WhiteCard";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const JuniorSearch = () => {
  const location = useLocation();
  const data = location.state.data; //post의 res.data

  return (
    <StJuniorSearch>
      <StHeader>
        <p>IT 계열 회사</p>
      </StHeader>
      {data.map(({}) => (
        <WhiteCard
          imgSrc={ImgSrc}
          company={Company} //숫자배열 -> 0번째 사용
          job={Category} //직군 숫자
          working={Working} //근속년수
          recommendPrize={RecommendPrize} //
          meetingCnt={MeetingCnt}
          tag={Worktag}
        />
      ))}
    </StJuniorSearch>
  );
};
export default JuniorSearch;

const StJuniorSearch = styled.div`
  width: 375px;
`;

const StHeader = styled.div`
  width: 375px;
  height: 52px;

  & > p {
    margin: 29px 0 0 29px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;

    color: #202e5f;
  }
`;
