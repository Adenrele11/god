import React from "react";
import Discount from "../components/Discount";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
function Home() {
  return (
    <>
      <Header />
      <Search />
      <Discount />
      <Featured />

      <Footer />
    </>
  );
}

export default Home;
