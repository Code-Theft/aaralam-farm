/**
 * © Aralam Farm 2024. All rights reserved.
 *
 * This code is the property of Aralam Farm and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import Link from "@components/Link";
import Image from "@components/Image";
import { imageAlts } from "@utils/constants";
import React from "react";

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
