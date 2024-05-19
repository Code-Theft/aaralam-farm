import React from "react";
import Image from "@components/Image";
import Link from "@components/Link";
import IconSeeMore from "@core/IconSeeMore";

interface ListCardsProps {
  product: string;
  productDetails: string;
  imgUrl: string;
  pdpUrl: string;
}
export default function ListCards({ data }: { data: ListCardsProps }) {
  return (
    <div className="col-md-4 list-cards mt-4">
      <div className="card-wrap">
        <div className="card-img ">
          <div className="skew-image">
            <Image
              src={data?.imgUrl}
              className="card-img-top"
              alt={data?.product}
              height={260}
              width={250}
            />
          </div>
        </div>
        <div className="card-desp">
          <div className="ltr">
            <h3>{data?.product}</h3>
            <p>{data?.productDetails}</p>
          </div>
          <div>
            <Link href={data?.pdpUrl}>
              <IconSeeMore />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
