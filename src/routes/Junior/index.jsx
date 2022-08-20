import { Routes, Route } from "react-router-dom";
import JuniorMain from "pages/Junior/JuniorMain";
import JuniorSearch from "pages/Junior/JuniorSearch";
import JuniorMyPage from "pages/Junior/JuniorMyPage";
import JuniorSchedule from "pages/Junior/JuniorSchedule";
import JuniorSetting from "pages/Junior/JuniorSetting";
<<<<<<< HEAD
import SeniorProfile from "pages/Junior/SeniorProfile";
=======
import NotFound from "routes/NotFound";
>>>>>>> dd54cd9b856c23cdaeba029259b79bcd896305d3

const Junior = () => {
  return (
    <Routes>
      <Route path="/" element={<JuniorMain />} />
      <Route path="/search" element={<JuniorSearch />} />
      <Route path="/note" element={<JuniorSchedule />} />
      <Route path="/mypage" element={<JuniorMyPage />} />
      <Route path="/setting" element={<JuniorSetting />} />
<<<<<<< HEAD
      <Route path="/profile/:id" element={<SeniorProfile />} />
=======
      <Route path="/*" element={<NotFound />} />
>>>>>>> dd54cd9b856c23cdaeba029259b79bcd896305d3
    </Routes>
  );
};

export default Junior;
