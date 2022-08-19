import { Routes } from "react-router-dom";
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
