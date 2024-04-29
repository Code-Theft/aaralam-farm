/**
 * © Aralam Farm 2024. All rights reserved.
 *
 * This code is the property of Aralam Farm and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import type { Metadata } from "next";
import { Children } from "@lib/types";
import "@styles/scss/main.scss";
import Header from "@widgets/Header";

export const metadata: Metadata = {
  title: "Aralam Farm",
  description:
    "Aralam Farm and Wildlife Sanctuary is evergreen and delicious forest area spanning 55kms located on the western slope of the Western Ghats",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
