"use client";

import React, { useMemo } from "react";
import Link from "@components/Link";
import AralamLogo from "@core/AralamLogo";
import { usePathname } from "next/navigation";
import IconChevronDown from "@icons/IconChevronDown";
import { navbarLinks, pageRoutes } from "@utils/constants";

export default function HeaderView() {
  const pathname = usePathname();
  const navbarItems = useMemo(() => {
    const navLinks = [
      {
        id: navbarLinks.HOME,
        path: "/",
        label: "Home",
      },
      {
        id: navbarLinks.ABOUT,
        path: "/about",
        label: "About",
      },
      {
        id: navbarLinks.PRODUCTS,
        path: "/products",
        label: "Farm Products",
      },
      {
        id: navbarLinks.PLANTS,
        path: "/plants",
        label: "Farm Plants",
      },
      {
        id: navbarLinks.TOURISM,
        path: "/tourism",
        label: "Farm Tourism",
      },
    ];
    return navLinks.map((item) => {
      const isActiveLink =
        (pathname === pageRoutes.HOME && item?.id === navbarLinks.HOME) ||
        (item?.path.includes(pathname) && pathname !== pageRoutes.HOME);
      // (pathname.includes(pageRoutes) && item?.path === pageRoutes.ORDER);

      return { ...item, active: isActiveLink };
    });
  }, [pathname]);

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
            {navbarItems?.map((item) => (
              <div
                className={`links${item?.active ? " active" : ""}`}
                key={item?.id}
              >
                <Link href={item?.path}>{item?.label}</Link>
              </div>
            ))}
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
