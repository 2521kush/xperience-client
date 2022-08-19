import { Routes } from "react-router-dom";
import SeniorMain from "pages/Senior/SeniorMain";
import SeniorNote from "pages/Senior/SeniorNote";
import SeniorMyPage from "pages/Senior/SeniorMyPage";
import SeniorSetting from "pages/Senior/SeniorSetting";

const Senior = () => {
  return (
    <Routes>
      <Routes path="/" element={<SeniorMain />} />
      <Routes path="/note" element={<SeniorNote />} />
      <Routes path="/mypage" element={<SeniorMyPage />} />
      <Routes path="/setting" element={<SeniorSetting />} />
    </Routes>
  );
};

export default Senior;
