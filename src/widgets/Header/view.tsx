import React from "react";
import Link from "@components/Link";
import AralamLogo from "@core/AralamLogo";

export default function HeaderView() {
  return (
    <header>
      <div className="header-top">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              <AralamLogo className="icon fill-secondary" />
            </Link>
          </div>
          <div>DropDown</div>
        </nav>
      </div>
    </header>
  );
}
