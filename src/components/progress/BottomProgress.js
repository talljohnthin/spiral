import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BottomProgress = () => {
  const progressPercent = useSelector(
    (state) => state.progress.progressPercent
  );
  const current = Number(Math.floor(progressPercent).toString().split("")[0]);

  return (
    <div className="bottom-progress">
      <ul className="progress-list">
        <li className={1 === current ? "active" : null}></li>
        <li className={2 === current ? "active" : null}></li>
        <li className={3 === current ? "active" : null}></li>
        <li className={4 === current ? "active" : null}></li>
        <li className={5 === current ? "active" : null}></li>
        <li className={6 === current ? "active" : null}></li>
        <li className={7 === current ? "active" : null}></li>
        <li className={8 === current ? "active" : null}></li>
        <li className={9 === current ? "active" : null}></li>
      </ul>
    </div>
  );
};

export default BottomProgress;
