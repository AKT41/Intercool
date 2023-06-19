import React from "react";
// import Navbar from "@/components/nav-footer/navbar";
// import Footer from "@/components/nav-footer/footer";
import ProductDetails from "@/components/product/product-details";
import Top from "@/components/home/top";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full h-full">
        <Top />
        <ProductDetails />
      </div>
      {/* <Footer /> */}
    </>
  );
}
