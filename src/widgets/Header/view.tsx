import React from "react";
import Link from "@components/Link";
import AralamLogo from "@core/AralamLogo";
import IconChevronDown from "@icons/IconChevronDown";

export default function HeaderView() {
  return (
    <header>
      <div className="header-top">
        <nav className="navbar navbar-expand">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              <AralamLogo className="icon fill-secondary" />
            </Link>
          </div>
          <div className="nav-links d-none d-md-flex">
            <div>
              <Link href="/">Home</Link>
            </div>
          </div>
          <div className="mobile-nav-links d-flex d-md-none">
            <IconChevronDown />
            <div>Mobile</div>
          </div>
        </nav>
      </div>
    </header>
  );
}
