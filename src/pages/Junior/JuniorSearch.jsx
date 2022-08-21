import WhiteCard from "components/Common/WhiteCard";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Nav from "components/Common/nav";

const JuniorSearch = () => {
  const location = useLocation();
  const data = location.state; //post의 res.data
  console.log("데이터 찍어보기", data.length);

  return (
    <StJuniorSearch>
      <Nav />
      <StHeader>
        <p>IT 계열 회사</p>
      </StHeader>
      {data.length !== 0 ? (
        data.map(
          ({ UserNo, ImgSrc, Company, Category, Profile, ConnectCnt }) => (
            <WhiteCard
              id={UserNo}
              imgSrc={ImgSrc}
              companyArr={Company} //숫자배열 -> 0번째 사용
              job={Category} //직군 숫자
              working={Profile.WorkPeriod} //근속년수 숫자
              meetingCnt={ConnectCnt}
              workTagArr={Profile.WorkTag} //워크태그배열
              characterTagArr={Profile.CharacterTag} //캐릭터태그배열
            />
          )
        )
      ) : (
        <h2>검색 결과가 존재하지 않습니다.</h2>
      )}
    </StJuniorSearch>
  );
};
export default JuniorSearch;

const StJuniorSearch = styled.div`
  width: 375px;
  & > h2 {
    padding-left: 50px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 18px;
    letter-spacing: -0.02em;

    color: gray;
  }
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
