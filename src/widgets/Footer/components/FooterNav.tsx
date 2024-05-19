import React from "react";
import { MappedDataType } from "@lib/types";
import MappedNav from "@widgets/Footer/components/MappedNav";

const about: Array<MappedDataType> = [
  {
    id: "Our Story",
    url: " ",
  },
  {
    id: "About Aralam Farm",
    url: " ",
  },
  {
    id: "Our Team",
    url: " ",
  },
  {
    id: "Gallery",
    url: " ",
  },
];

const tourism: Array<MappedDataType> = [
  {
    id: "Overview",
    url: " ",
  },
  {
    id: "Packages/Tariff",
    url: " ",
  },
  {
    id: "Register",
    url: " ",
  },
  {
    id: "Features/Amenities",
    url: " ",
  },
];

const products: Array<MappedDataType> = [
  {
    id: "Products",
    url: " ",
  },
  {
    id: "Plants",
    url: " ",
  },
  {
    id: "Photos & Videos",
    url: " ",
  },
  {
    id: "Enquiry",
    url: " ",
  },
];
const siteInfo: Array<MappedDataType> = [
  {
    id: "Privacy Policy",
    url: " ",
  },
  {
    id: "Terms & Conditions",
    url: " ",
  },
  {
    id: "Refund & Cancellation",
    url: " ",
  },
  {
    id: "Sitemap",
    url: " ",
  },
];

const FooterNav = () => {
  return (
    <div className="footer-nav">
      <div className="row">
        <MappedNav title="About" data={about} />
        <MappedNav title="Farm Tourism" data={tourism} />
        <MappedNav title="Farm Products & Plants" data={products} />
        <MappedNav title="Site Information" data={siteInfo} />
      </div>
    </div>
  );
};

export default FooterNav;
