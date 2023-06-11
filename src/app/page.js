import React from "react";
import Home from "@/pages/home";
import Navbar from "@/components/nav-footer/navbar";
import Footer from "@/components/nav-footer/footer";
import About from "@/components/about";
import ProductDetails from "@/components/product/product-details";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <About /> */}
      <ProductDetails />
      <Footer />
    </>
  );
}
