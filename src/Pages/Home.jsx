import React from "react";
import MainSection from "../Components/MainSection";
import Navbar from "../Components/Layouts/Navbar";
import ServicesSection from "../Components/ServicesSection";
import FeaturesSection from "../Components/FeaturesSection";
import PlanSection from "../Components/PlanSection";
import ReviewsSection from "../Components/ReviewsSection";
import TialSection from "../Components/TialSection";
import JoinUsSection from "../Components/JoinUsSection";
import Footer from "../Components/Layouts/Footer";

const Home = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-[url('https://othello-leather.myshopify.com/cdn/shop/products/olu-eletu-134760.jpg?v=1680802581')] bg-cover bg-left">
      <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)]">
        <Navbar />

        <MainSection/>

        <section id="servicesSection">
          <ServicesSection />
        </section>
        <section id="featuresSection">
        <FeaturesSection />
        </section>
        <section id="planSection">
          <PlanSection />
        </section>
        <section id="reviewsSection">
          <ReviewsSection />
        </section>
        <section id="freeTrialSection">
          <TialSection />
        </section>
        <section id="joinUsSection">
          <JoinUsSection />
        </section>
        <section id="footerSection">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
