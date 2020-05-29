import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentView } from "./../../redux/actions/data/dataActions";
import Progress from "./Progress";

const ProgressMobile = () => {
  const isLanding = useSelector((state) => state.data.landingView);
  const dispatch = useDispatch();
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return dimensions.width < 767 ? (
    isLanding ? (
      <div className="progress--mobile">
        <Progress />
      </div>
    ) : null
  ) : null;
};

export default ProgressMobile;
