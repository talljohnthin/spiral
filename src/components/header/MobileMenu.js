import React from "react";
import { useDispatch } from "react-redux";
import { openSideMenu } from "./../../redux/actions/site/siteActions";
import MenuIcon from "@material-ui/icons/Menu";

const MobileMenu = () => {
  const dispatch = useDispatch();
  return (
    <MenuIcon
      className="hamburger-icon"
      onClick={() => dispatch(openSideMenu())}
    />
  );
};

export default MobileMenu;
