import React from "react";
import Image from "@components/Image";

export default function ProductDetailsView() {
  return (
    <div className="product-information">
      <div className="info-details">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 order-2 order-lg-1">
              <div className="info-content-panel">
                <div className="content">
                  <h5 className="title mb-12 d-none d-lg-block">
                    Product Information
                  </h5>
                  <div className="row align-items-center mt-2">
                    <div className="col-5">
                      <div className="fw-bold">Type</div>
                    </div>
                    <div className="col-7">
                      <span className="h6 me-2">•</span>Cashews
                    </div>
                  </div>
                  <div className="row align-items-center mt-2">
                    <div className="col-5">
                      <div className="fw-bold">Quantity</div>
                    </div>
                    <div className="col-7">
                      <span className="h6 me-2">•</span>450 g
                    </div>
                  </div>
                  <div className="row align-items-center mt-2">
                    <div className="col-5">
                      <div className="fw-bold">Variant</div>
                    </div>
                    <div className="col-7">
                      <span className="h6 me-2">•</span>Dried
                    </div>
                  </div>
                  <div className="row align-items-center mt-2">
                    <div className="col-5">
                      <div className="fw-bold">Container Type</div>
                    </div>
                    <div className="col-7">
                      <span className="h6 me-2">•</span>Pouch
                    </div>
                  </div>
                  <div className="row align-items-center mt-2">
                    <div className="col-5">
                      <div className="fw-bold">Organic</div>
                    </div>
                    <div className="col-7">
                      <span className="h6 me-2">•</span>No
                    </div>
                  </div>
                  <div className="row align-items-center mt-2">
                    <div className="col-5">
                      <div className="fw-bold">Maximum Shell Life</div>
                    </div>
                    <div className="col-7">
                      <span className="h6 me-2">•</span>365 Days
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7 order-1 order-lg-2">
              <div className="info-image-panel">
                <div className="info-image lg">
                  <img
                    alt=""
                    loading="lazy"
                    width="847"
                    height="490"
                    decoding="async"
                    data-nimg="1"
                    // style="color: transparent"
                    //     srcset="
                    //   /_next/image?url=%2Fimages%2Fpdp%2Fpdp-info-01.webp&amp;w=1080&amp;q=75 1x,
                    //   /_next/image?url=%2Fimages%2Fpdp%2Fpdp-info-01.webp&amp;w=1920&amp;q=75 2x
                    // "
                    src="/_next/image?url=%2Fimages%2Fpdp%2Fpdp-info-01.webp&amp;w=1920&amp;q=75"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-details">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="info-image-panel">
                <div className="info-image">
                  <img
                    alt=""
                    loading="lazy"
                    width="847"
                    height="490"
                    decoding="async"
                    data-nimg="1"
                    //     style="color: transparent"
                    //     srcset="
                    //   /_next/image?url=%2Fimages%2Fpdp%2Fpdp-info-02.webp&amp;w=1080&amp;q=75 1x,
                    //   /_next/image?url=%2Fimages%2Fpdp%2Fpdp-info-02.webp&amp;w=1920&amp;q=75 2x
                    // "
                    src="/_next/image?url=%2Fimages%2Fpdp%2Fpdp-info-02.webp&amp;w=1920&amp;q=75"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7 mt-6 mt-lg-0">
              <div className="info-content-panel">
                <div className="content pe-lg-10">
                  <h5 className="title mb-12 d-none d-lg-block">
                    About the Product
                  </h5>
                  <p className="text">
                    Combining performance, style and comfort, these women's
                    sunglasses by Maui Jim are a great accessory for your
                    everyday edits. Designed in a timeless tortoiseshell print,
                    these injected frames feature a sleek cat-eye silhouette
                    with a high contrast bronze lens that adds a touch of
                    elegance and feminine appeal to your look.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
