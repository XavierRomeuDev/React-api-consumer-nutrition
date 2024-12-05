import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Search } from "../Components/Search";
import { NotFound } from "../Components/NotFound";
import { TopProducts } from "../Components/TopProducts";
import { ProductList } from "../Components/ProductList";
import { HeaderNav } from "../Components/layout/HeaderNav";
import { Footer } from "../Components/layout/Footer";

export const Router = () => {
  return (
    <BrowserRouter>
      {/* HEADER AND NAVIGATION */}
      <HeaderNav />
      {/* CONTENT */}
      <section className="content">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/top" element={<TopProducts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>

      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  );
};
