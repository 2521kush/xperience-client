import styled from "styled-components";

const Nav = () => {
  return (
    <StNav>
      <StIconBtn>
        <img src="" alt="" />
      </StIconBtn>
    </StNav>
  );
};

export default Nav;
const StNav = styled.div``;
const StIconBtn = styled.div`
  & > img {
    width: 20px;
    height: 20px;
  }
`;
