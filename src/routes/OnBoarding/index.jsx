import React from 'react';
import { Routes, Route } from "react-router-dom";
import OnBoarding1 from 'pages/OnBoarding/OnBoarding1';
import OnBoarding2 from 'pages/OnBoarding/OnBoarding2';
import OnBoarding3 from 'pages/OnBoarding/OnBoarding3';
import OnBoarding4 from 'pages/OnBoarding/OnBoarding4';
import NotFound from "routes/NotFound";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding1 />} />
      <Route path="/step1" element={<OnBoarding1 />} />
      <Route path="/step2" element={<OnBoarding2 />} />
      <Route path="/step3" element={<OnBoarding3 />} />
      <Route path="/step4" element={<OnBoarding4 />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
};

export default index;