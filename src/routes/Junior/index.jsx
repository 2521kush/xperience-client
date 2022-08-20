import { Routes, Route } from "react-router-dom";
import JuniorMain from "pages/Junior/JuniorMain";
import JuniorMyPage from "pages/Junior/JuniorMyPage";
import JuniorSchedule from "pages/Junior/JuniorSchedule";
import JuniorSetting from "pages/Junior/JuniorSetting";

const Junior = () => {
  return (
    <Routes>
      <Route path="/" element={<JuniorMain />} />
      <Route path="/note" element={<JuniorSchedule />} />
      <Route path="/mypage" element={<JuniorMyPage />} />
      <Route path="/setting" element={<JuniorSetting />} />
    </Routes>
  );
};

export default Junior;
