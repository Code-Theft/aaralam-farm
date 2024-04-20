/**
 * © Aralam Farm 2024. All rights reserved.
 *
 * This code is the property of Aralam Farm and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";

interface FeatureCardsProps {
  icon: React.JSX.Element;
  value: string;
  index: number;
}

export default function FeatureCards({ icon, value }: FeatureCardsProps) {
  return (
    <div className="feature-items">
      <div className="item-icons">{icon}</div>
      <div className="icons-text">{value}</div>
    </div>
  );
}
