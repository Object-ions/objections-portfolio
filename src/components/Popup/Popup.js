import React from "react";
import "./Popup.scss";

const Popup = ({ onClose }) => {
  return (
    <div className="Popup">
      <div className="popup-content">
        <p>
          This project is currently evolving, and I'm excited to announce that
          my portfolio will be fully accessible in the near future. In the
          meantime, enjoy exploring what's available. For the best experience, I
          recommend viewing the website on a desktop, as I'm actively enhancing
          both the content and its responsiveness.
        </p>
        <button onClick={onClose}> {"> "}Close</button>
      </div>
    </div>
  );
};

export default Popup;
