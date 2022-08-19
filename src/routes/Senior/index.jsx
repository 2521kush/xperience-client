import { Routes } from "react-router-dom";
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
