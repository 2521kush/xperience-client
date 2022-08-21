import styled from "styled-components";

const ProfileImgDiv = (props) => {
  const imgsrc = props;
  console.log("dsd", imgsrc);
  return (
    <StProfileImgDiv>
      <img
        src={
          imgsrc.src
            ? imgsrc.src
            : "http://knconsulting.co.kr/common/img/default_profile.png"
        }
        alt=""
      />
    </StProfileImgDiv>
  );
};

export default ProfileImgDiv;

const StProfileImgDiv = styled.div`
  width: 51px;
  height: 51px;

  background-color: purple;

  border-radius: 50%;

  filter: drop-shadow(0px 3.51724px 3.51724px rgba(102, 97, 230, 0.15));
  & > img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
`;
