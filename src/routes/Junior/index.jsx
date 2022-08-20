import { Routes, Route } from "react-router-dom";
import JuniorMain from "pages/Junior/JuniorMain";
import JuniorSearch from "pages/Junior/JuniorSearch";
import JuniorMyPage from "pages/Junior/JuniorMyPage";
import JuniorSchedule from "pages/Junior/JuniorSchedule";
import JuniorSetting from "pages/Junior/JuniorSetting";
import SeniorProfile from "pages/Junior/SeniorProfile";

const Junior = () => {
  return (
    <Routes>
      <Route path="/" element={<JuniorMain />} />
      <Route path="/search" element={<JuniorSearch />} />
      <Route path="/note" element={<JuniorSchedule />} />
      <Route path="/mypage" element={<JuniorMyPage />} />
      <Route path="/setting" element={<JuniorSetting />} />
      <Route path="/profile/:id" element={<SeniorProfile />} />
    </Routes>
  );
};

export default Junior;
