import React from "react";
import Image from "next/image";

const InfoDetails = () => (
  <div className="info-details">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-5 order-2 order-lg-1">
          <div className="info-content-panel">
            <div className="content">
              <h5 className="title mb-12">Product Information</h5>
              <div className="row align-items-center mt-5">
                <div className="col-5">
                  <div className="fw-bold">Name</div>
                </div>
                <div className="col-7">
                  <span className="h6 me-2">&bull;</span>
                  AloVera Plants
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
                  Weekly
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block col-12 col-lg-7 order-1 order-lg-2">
          <div className="info-image-panel">
            <div className="info-image lg">
              <Image src="/images/footer.png" width={847} height={490} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="info-content-panel">
            <div className="content pe-lg-10">
              <h5 className="title mb-12 d-lg-block">About the Product</h5>
              <p className="text">
                Aloe vera is a succulent plant species of the genus Aloe. The
                plant is stemless or very short-stemmed with thick, greenish,
                fleshy leaves that fan out from the plant's central stem. The
                margin of the leaf is serrated with small teeth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InfoDetails;
