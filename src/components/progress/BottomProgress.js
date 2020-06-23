import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const BottomProgress = () => {
  const totalSlideNumber = useSelector((state) => state.progress.totalPage);
  const buildArray = [];

  const renderList = () => {
    for (let i = 0; i < totalSlideNumber; i++) {
      buildArray.push("");
    }
  };

  useEffect(() => {
    renderList();
  }, []);

  return (
    <div className="bottom-progress">
      <ul className="progress-list">
        {buildArray.map((item) => (
          <li></li>
        ))}
      </ul>
    </div>
  );
};

export default BottomProgress;
