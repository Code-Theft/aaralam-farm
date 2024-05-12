import React from "react";
import Link from "@components/Link";
import Image from "@components/Image";
import { imageAlts } from "@utils/constants";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-title">
          <div>
            <Image
              src="/images/aralam_farm_title.svg"
              width={184}
              height={72}
              alt={imageAlts.HOME}
            />
          </div>
          <div className="navbar">
            <ul>
              <li>
                <Link href="/" className="next-links">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/todo" className="next-links">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/todo" className="next-links">
                  Tender
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div> List of Items</div>
        <div> Copyright</div>
      </footer>
      ;
    </>
  );
};

export default Footer;
