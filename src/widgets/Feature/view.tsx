/**
 * © Aralam Farm 2024. All rights reserved.
 *
 * This code is the property of Aralam Farm and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Image from "@components/Image";
import Button from "@components/Button";
import IconLeaf from "@icons/IconLeaf";
import IconLoc from "@icons/IconLoc";
import IconStay from "@icons/IconStay";
import IconShop from "@icons/IconShop";
import FeatureCards from "@widgets/Feature/components/FeatureCards";

const featureIcons = [
  {
    name: "Farm Plants",
    icon: <IconLeaf />,
  },
  {
    name: "Farm Tourism",
    icon: <IconLoc />,
  },

  {
    name: "Tent Stay",
    icon: <IconStay />,
  },

  {
    name: "Farm Products",
    icon: <IconShop />,
  },
];

export default function FeatureView() {
  return (
    <div className="feature">
      <div className="feature-wrap">
        <div className="row">
          <div className="col-12 col-md-6 d-none d-md-block">
            <Image
              src="/images/aralam-wildlife.jpg"
              alt="fsd"
              width="800"
              height="320"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-6">
            <div>
              <h1 className="feature-head">
                Aralam Farm Agriculture and Environmental
              </h1>
              <p className="feature-desp">
                The Aralam Farm and Wildlife Sanctuary is evergreen and decidous
                forest area spinning 55 sq.kms
              </p>
              <div>
                <Button className="btn" isdisabled={false} value="Read More" />
              </div>
              <div className="my-4">
                <div className="row">
                  {featureIcons?.map((item, index) => (
                    <div
                      className="col-6 col-lg-3 col-md-6"
                      key={`mapping_key_${index + 1}`}
                    >
                      <FeatureCards
                        icon={item?.icon}
                        value={item?.name}
                        index={index}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
