import { Routes, Route } from "react-router-dom";
import SeniorMain from "pages/Senior/SeniorMain";
import SeniorNote from "pages/Senior/SeniorNote";
import SeniorMyPage from "pages/Senior/SeniorMyPage";
import SeniorSetting from "pages/Senior/SeniorSetting";

const Senior = () => {
  return (
    <Routes>
      <Route path="/" element={<SeniorMain />} />
      <Route path="/note" element={<SeniorNote />} />
      <Route path="/mypage" element={<SeniorMyPage />} />
      <Route path="/setting" element={<SeniorSetting />} />
    </Routes>
  );
};

export default Senior;
