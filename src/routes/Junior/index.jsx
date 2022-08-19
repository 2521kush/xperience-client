import { Routes } from "react-router-dom";
import JuniorMain from "pages/Junior/JuniorMain";
import JuniorMyPage from "pages/Junior/JuniorMyPage";
import JuniorNote from "pages/Junior/JuniorNote";
import JuniorSetting from "pages/Junior/JuniorSetting";

const Junior = () => {
  return (
    <Routes>
      <Routes path="/" element={<JuniorMain />} />
      <Routes path="/note" element={<JuniorNote />} />
      <Routes path="/mypage" element={<JuniorMyPage />} />
      <Routes path="/setting" element={<JuniorSetting />} />
    </Routes>
  );
};

export default Junior;
