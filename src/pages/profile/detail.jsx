import styled from "styled-components";
import ProfileDetailImg from "assets/profileDetail.png";
import Nav from "components/Common/nav";
import { useNavigate } from "react-router-dom";

const ProfileDetail = () => {
  const navigate = useNavigate();
  return (
    <StProfileDetail
      onClick={() => {
        navigate("/junior/apply");
      }}
    >
      <Nav />
      <img src={ProfileDetailImg} alt="" />
    </StProfileDetail>
  );
};

export default ProfileDetail;

const StProfileDetail = styled.div`
  width: 375px;
  & > img {
    height: 739px;
    width: 375px;
  }
`;
