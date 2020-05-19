import React from "react";
import LockIcon from "@material-ui/icons/Lock";

const SecureFormText = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <LockIcon style={{ color: "#6a6a6a", fontSize: 22 }} />
      <span
        style={{ fontWeight: 300, paddingLeft: 4, fontSize: 16, color: "#333" }}
      >
        Secure Form
      </span>
    </div>
  );
};

export default SecureFormText;
