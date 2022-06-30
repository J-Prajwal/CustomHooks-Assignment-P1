import React from "react";
import useTimeout from "../Hooks/useTimeout";

const CompUseTimeout = () => {
  const ready = useTimeout(5000);
  return (
    <div>
      <p>{ready ? "Ready" : "Wait for 5 seconds"}</p>
    </div>
  );
};

export default CompUseTimeout;
