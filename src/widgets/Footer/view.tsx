import React from "react";
import Link from "@components/Link";
import AralamLogo from "@core/AralamLogo";
import Copyright from "@widgets/Footer/components/Copyright";
import FooterNav from "@widgets/Footer/components/FooterNav";
import SocialMedia from "@widgets/Footer/components/SocialMedia";

const Footer = () => {
  return (
    <footer id="hideFooter">
      <div className="container">
        <div className="footer-panel">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="col-xl-9">
                <div className="footer-brand">
                  <Link href="/" className="navbar-brand">
                    <AralamLogo className="icon fill-secondary" />
                  </Link>
                </div>
                <div className="newsletter">
                  <p className="text">
                    Aralam Farm and Wildlife Sanctuary is evergreen and
                    delicious forest area spanning 55kms located on the western
                    slope of the Western Ghats.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 d-none d-md-block">
              <FooterNav />
            </div>
          </div>
          <div className="row align-items-lg-end my-8">
            <div className="col-12 col-md-4 col-lg-4">
              <SocialMedia />
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
