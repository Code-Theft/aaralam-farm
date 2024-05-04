import React from "react";
import ListCards from "@widgets/ProductListing/components/ListCards";
import Button from "@components/Button";

const storeData = [
  {
    product: "Cashew",
    productDetails: "King of Cashews",
    imgUrl: "/images/assets/cashew.png",
    pdpUrl: "/products/cahews",
  },
  {
    product: "Honey",
    productDetails: "Sage Honey",
    imgUrl: "/images/assets/honey.png",
    pdpUrl: "/products/honey",
  },
  {
    product: "Pepper",
    productDetails: "Pepper Nigrum",
    imgUrl: "/images/assets/pepper.png",
    pdpUrl: "/products/pepper",
  },
  {
    product: "Coconut Tree",
    productDetails: "Kalpasree",
    imgUrl: "/images/assets/coconut.png",
    pdpUrl: "/products/coconut",
  },
  {
    product: "Banana Tree",
    productDetails: "Grand Naine",
    imgUrl: "/images/assets/banana.png",
    pdpUrl: "/products/banana",
  },
];

export default function ProductListview() {
  return (
    <div className="product-listing">
      <div className="listing-wrap">
        <div className="product-head">
          <h1>Visit Our Store</h1>
          <p>Find the list of items available in Our Stores.</p>
        </div>
        <div className="product-lists">
          <div className="row">
            {storeData?.map((item, index) => (
              <ListCards data={item} key={`key_${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="see-more">
          <Button className="btn" isdisabled={false} value="See More >>" />
        </div>
      </div>
    </div>
  );
}
