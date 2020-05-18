import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LinearProgress } from "@material-ui/core";

const Progress = () => {
  const percent = useSelector((state) => state.progress.progressPercent);
  return (
    <LinearProgress
      variant="determinate"
      style={{
        height: 13,
        backgroundColor: "#efefef",
        border: "1px solid #eee",
        minWidth: 120,
      }}
      value={percent || 0}
      color="primary"
    />
  );
};

export default Progress;
