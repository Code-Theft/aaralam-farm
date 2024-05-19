import React from "react";
import ListCards from "@components/ListCards";
import Button from "@components/Button";
import Link from "@components/Link";

const plantData = [
  {
    product: "Cashew",
    productDetails: "King of Cashews",
    imgUrl: "/images/assets/cashew.png",
    pdpUrl: "/plants/cahews",
  },
  {
    product: "Honey",
    productDetails: "Sage Honey",
    imgUrl: "/images/assets/honey.png",
    pdpUrl: "/plants/honey",
  },
  {
    product: "Pepper",
    productDetails: "Pepper Nigrum",
    imgUrl: "/images/assets/pepper.png",
    pdpUrl: "/plants/pepper",
  },
  {
    product: "Coconut Tree",
    productDetails: "Kalpasree",
    imgUrl: "/images/assets/coconut.png",
    pdpUrl: "/plants/coconut",
  },
  {
    product: "Banana Tree",
    productDetails: "Grand Naine",
    imgUrl: "/images/assets/banana.png",
    pdpUrl: "/plants/banana",
  },
];

export default function PlantsListview() {
  return (
    <div className="plant-listing">
      <div className="listing-wrap">
        <div className="product-head">
          <h1>Visit Our Plant Store</h1>
          <p>Find the list of plants available in Our Stores.</p>
        </div>
        <div className="product-lists">
          <div className="row">
            {plantData?.map((item, index) => (
              <ListCards data={item} key={`key_${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="see-more">
          <Link href="/plants">
            <Button className="btn" isdisabled={false} value="See More >>" />
          </Link>
        </div>
      </div>
    </div>
  );
}
