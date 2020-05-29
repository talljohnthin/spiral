import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openSideMenu } from "./../../redux/actions/site/siteActions";
import { Link } from "react-router-dom";

const Index = () => {
  const [menuActive, setMenuActive] = useState("");
  const isOpenMenu = useSelector((state) => state.site.openMobileMenu);
  const dispatch = useDispatch();

  const handleOnLinkClick = (route) => {
    setMenuActive(route);
    dispatch(openSideMenu());
  };
  return (
    <div className={isOpenMenu ? "mobile-side-menu open" : "mobile-side-menu"}>
      <ul className="menu--items">
        <Link
          className={menuActive === "about" ? "active" : ""}
          onClick={() => handleOnLinkClick("about")}
          to="/about"
        >
          About
        </Link>
        <Link
          className={menuActive === "faq" ? "active" : ""}
          onClick={() => handleOnLinkClick("faq")}
          to="/faq"
        >
          Faqs
        </Link>
        <Link
          className={menuActive === "incentives" ? "active" : ""}
          onClick={() => handleOnLinkClick("incentives")}
          to="/incentives"
        >
          Rebates and Incentives
        </Link>
        <Link
          className={menuActive === "works" ? "active" : ""}
          onClick={() => handleOnLinkClick("works")}
          to="/how-solar-works"
        >
          How Solar Works
        </Link>
        <Link
          className={menuActive === "contact" ? "active" : ""}
          onClick={() => handleOnLinkClick("contact")}
          to="/contact"
        >
          Contact Us
        </Link>
      </ul>
    </div>
  );
};

export default Index;
