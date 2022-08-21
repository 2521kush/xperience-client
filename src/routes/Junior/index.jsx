import { Routes, Route } from "react-router-dom";
import JuniorMain from "pages/Junior/JuniorMain";
import JuniorSearch from "pages/Junior/JuniorSearch";
import JuniorMyPage from "pages/Junior/JuniorMyPage";
import JuniorSchedule from "pages/Junior/JuniorSchedule";
import JuniorSetting from "pages/Junior/JuniorSetting";
import JuniorApply from "pages/Junior/JuniorApply";
import JuniorDetail from "pages/Junior/JuniorDetail";
import SeniorProfile from "pages/Junior/SeniorProfile";
import NotFound from "routes/NotFound";


const Junior = () => {
  return (
    <Routes>
      <Route path="/" element={<JuniorMain />} />
      <Route path="/detail" element={<JuniorDetail />} />
      <Route path="/apply" element={<JuniorApply />} />
      <Route path="/search" element={<JuniorSearch />} />
      <Route path="/note" element={<JuniorSchedule />} />
      <Route path="/mypage" element={<JuniorMyPage />} />
      <Route path="/schedule" element={<JuniorSchedule />} />
      <Route path="/setting" element={<JuniorSetting />} />
      <Route path="/profile/:id" element={<SeniorProfile />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Junior;
