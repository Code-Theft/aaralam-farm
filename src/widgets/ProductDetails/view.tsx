import React from "react";
import InfoDetails from "./components/InfoDetails";

export default function ProductDetailsView() {
  return (
    <div className="pdp-panel">
      <div className="pdp-details">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row gx-xl-0">
                <div className="col-12 col-md-6 col-lg-7">
                  {/* <PdpImageSlider /> */}
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                  {/* <PdpDetails /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-information">
        <InfoDetails />
      </div>
      {/* <RecommendedProducts title="You Might Like These" />*/}
    </div>
  );
}
