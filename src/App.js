import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header, Footer } from "components";

import {
  Getir,
  GetirYemek,
  GetirBuyuk,
  GetirSu,
  GetirCarsi,
  ErrorPage,
} from "pages";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Getir />} />
        <Route path="yemek" element={<GetirYemek />} />
        <Route path="buyuk" element={<GetirBuyuk />} />
        <Route path="su" element={<GetirSu />} />
        <Route path="carsi" element={<GetirCarsi />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}
