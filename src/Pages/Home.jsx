import React from "react";
import Banner from "../components/Banner";
import DealsSection from "../components/DealsSection"; // ✅ add this
import CategorySection from "../components/CategorySection"; // ✅ fix this
import Footer from "../components/Footer";
import LuxeDeals from "../components/LuxeDeals";
import Brand from "../components/Brand";
const Home = () => {
  return (
    <div>
      <Banner />
      <DealsSection />
      <LuxeDeals/>
      <Brand/>
      <CategorySection />
      <Footer />
    </div>
  );
};

export default Home;