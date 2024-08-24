import React from "react";
import Image from "next/image";

const InfoDetails = () => (
  <div className="info-details">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-5 order-2 order-lg-1">
          <div className="info-content-panel">
            <div className="content">
              <h5 className="title mb-12 d-none d-lg-block">
                Product Information
              </h5>
              <div className="row align-items-center mt-5">
                <div className="col-5">
                  <div className="fw-bold">Name</div>
                </div>
                <div className="col-7">
                  <span className="h6 me-2">&bull;</span>
                  Cluster of Glass Shape Planters
                </div>
              </div>
              <div className="row align-items-center mt-5">
                <div className="col-5">
                  <div className="fw-bold">Size</div>
                </div>
                <div className="col-7">
                  <span className="h6 me-2">&bull;</span>
                  24,18,12 Inch
                </div>
              </div>
              <div className="row align-items-center mt-5">
                <div className="col-5">
                  <div className="fw-bold">Location</div>
                </div>
                <div className="col-7">
                  <span className="h6 me-2">&bull;</span>
                  Outdoor
                </div>
              </div>
              <div className="row align-items-center mt-5">
                <div className="col-5">
                  <div className="fw-bold">Watering</div>
                </div>
                <div className="col-7">
                  <span className="h6 me-2">&bull;</span>
                  Daily
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7 order-1 order-lg-2">
          <div className="info-image-panel">
            <div className="info-image lg">
              <Image src="/images/footer.png" width={847} height={490} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InfoDetails;
