import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import activeHome from "assets/nav_home_active.png";
import inactiveHome from "assets/nav_home_inactive.png";
import activeSchedule from "assets/nav_schedule_active.png";
import inactiveSchedule from "assets/nav_schedule_inactive.png";
import activeProfile from "assets/nav_profile_active.png";
import inactiveProfile from "assets/nav_profile_inactive.png";
import activeSetting from "assets/nav_setting_active.png";
import inactiveSetting from "assets/nav_setting_inactive.png";

const Nav = () => {
  const router = useLocation();
  const [currentPath, setcurrentPath] = useState("home");

  const getCurrentPath = () => {
    if (router.pathname.includes("/schedule")) {
      setcurrentPath("schedule");
    } else if (router.pathname.includes("/mypage")) {
      setcurrentPath("profile");
    } else if (router.pathname.includes("/setting")) {
      setcurrentPath("setting");
    } else {
      setcurrentPath("home");
    }
  };

  const handleClick = (props) => {
    const baseRoute = router.pathname.includes("senior") ? "senior" : "junior";
    const detailRoute = props;
    window.location.href = `/${baseRoute}/${detailRoute}`;
  };

  useEffect(() => {
    getCurrentPath();
  }, []);

  return (
    <StNav>
      <StIconWrapper>
        <StIconBtn onClick={() => handleClick("")}>
          <img
            src={currentPath === "home" ? activeHome : inactiveHome}
            alt="홈"
          />
        </StIconBtn>
        <StIconBtn onClick={() => handleClick("schedule")}>
          <img
            src={currentPath === "schedule" ? activeSchedule : inactiveSchedule}
            alt="일정"
          />
        </StIconBtn>
        <StIconBtn onClick={() => handleClick("mypage")}>
          <img
            src={currentPath === "profile" ? activeProfile : inactiveProfile}
            alt="프로필"
          />
        </StIconBtn>
        <StIconBtn onClick={() => handleClick("setting")}>
          <img
            src={currentPath === "setting" ? activeSetting : inactiveSetting}
            alt="설정"
          />
        </StIconBtn>
      </StIconWrapper>
    </StNav>
  );
};

export default Nav;

const StNav = styled.div`
  display: flex;
  justify-content: space-around;
  position: sticky;

  width: 375px;
  hegiht: 73px;

  background-color: white;
`;
const StIconWrapper = styled.div`
  display: flex;

  gap: 60px;
  margin: 12px;
`;

const StIconBtn = styled.div`
  & > img {
    width: 22px;
    height: 42px;
    border-radius: 0px;
  }
`;
