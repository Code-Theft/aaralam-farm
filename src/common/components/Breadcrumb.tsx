import React from "react";
import Link from "next/link";
import IconHome from "@icons/IconHome";

const Breadcrumb = () => (
  <div className="breadcrumb-panel">
    <div className="breadcrumb-scroll">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
              <IconHome className="" />
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/plants">Plants</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Plant Name
          </li>
        </ol>
      </div>
    </div>
  </div>
);

export default Breadcrumb;
