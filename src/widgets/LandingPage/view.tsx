import React from "react";
import SwiperCards from "./components/SwiperCards";

export default function LandingPageView() {
  return (
    <div className="home">
      <div className="col-12 col-md-6">
        <div className="home-wrap">
          <h2>Explore</h2>
          <h1>ARALAM FARM</h1>
          <p>
            Aralam Farm and Wildlife Sanctuary is evergreen and delicious forest
            area spanning 55kms located on the western slope of the Western
            Ghats
          </p>
        </div>
      </div>
      <div className="col-12 col-md-6 d-none d-md-flex home-slide">
        <div className="slide-wrap ">
          <SwiperCards />
        </div>
      </div>
    </div>
  );
}
