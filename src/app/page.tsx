import React from "react";
import Footer from "@widgets/Footer";
import Feature from "@widgets/Feature";
import LandingPage from "@widgets/LandingPage";
import ProductList from "@widgets/ProductListing";
import PlantsList from "@widgets/PlantsListing/view";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Feature />
      <ProductList />
      <PlantsList />
      <Footer />
    </>
  );
}
