import React from "react";
import "./Design.scss";
import "animate.css";

const Design = () => {
  const animationClass = "animate__animated animate__fadeInUp";

  // Animate the header with 0.1 sec delay
  const getAnimationDelay = (delaySec) => {
    const style = { animationDelay: `${delaySec}s` };
    return { className: animationClass, style };
  };

  console.log("Design");
  return (
    <div className="Design">
      <p {...getAnimationDelay(0)}>
        {"// "}Portfolio Under Construction
        <hr />
      </p>
      <p {...getAnimationDelay(1)}>
        <br />
        <span class="color">console.log</span>("Hey there! This part of my
        portfolio is still being perfected.
        <br />
        Can't wait to share it with you. Stay tuned! " );
      </p>
    </div>
  );
};

export default Design;
