/**
 * © Aralam Farm 2024. All rights reserved.
 *
 * This code is the property of Aralam Farm and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Footer from "@widgets/Footer";
import Feature from "@widgets/Feature";
import ProductList from "@widgets/ProductListing";

export default function Home() {
  return (
    <>
      <div>Aralam Farm</div>
      <Feature />
      <ProductList />
      {/* <Footer /> */}
    </>
  );
}
