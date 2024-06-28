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
    <div>
      <Navbar />

      <MainSection />

      <section id="servicesSection">
        <ServicesSection />
      </section>
      <FeaturesSection />
      <section id="planSection">
        <PlanSection />
      </section>
      <section id="reviewsSection">
        <ReviewsSection />
      </section>
      <section id="tialSection">
        <TialSection />
      </section>
      <section id="joinUsSection">
        <JoinUsSection />
      </section>
      <section id="footerSection">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
