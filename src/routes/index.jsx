import { Routes } from "react-router-dom";
import Senior from "./Senior";
import Junior from "./Junior";

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Routes path="/" element={<OnBoarding />} /> */}
      {/* <Routes path="/login" element={<Login />} /> */}
      {/* <Routes path="/signup" element={<Signup />} /> */}
      <Routes path="/senior/*" element={<Senior />} />
      <Routes path="/junior/*" element={<Junior />} />
      {/* <Routes path="/*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default MainRoutes;
