import React from "react";
import type { Metadata } from "next";
import { Children } from "@lib/types";
import "@styles/scss/main.scss";
import Header from "@widgets/Header";
import Footer from "@widgets/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
