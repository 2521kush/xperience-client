import styled from "styled-components";

const Nav = () => {
  return (
    <StNav>
      <StIconWrapper>
        <StIconBtn>
          <img src="" alt="홈" />
        </StIconBtn>
        <StIconBtn>
          <img src="" alt="" />
        </StIconBtn>
        <StIconBtn>
          <img src="" alt="마이페이지" />
        </StIconBtn>
        <StIconBtn>
          <img src="" alt="설정" />
        </StIconBtn>
      </StIconWrapper>
    </StNav>
  );
};

export default Nav;
const StNav = styled.div`
  width: 375px;

  background-color: white;
`;
const StIconWrapper = styled.div`
  display: flex;

  margin-top: 3px;
`;
const StIconBtn = styled.div`
  & > img {
    width: 20px;
    height: 20px;
  }
`;
