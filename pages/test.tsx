import React from "react";

const test = () => {
  const onClick = () => {
    window.open("/pdf/sample.pdf", "sample", `location=no`);
  };
  return (
    <div>
      <a href="/pdf/sample.pdf" target="_blank" rel="noreferrer">
        <div className="modal-side-nav-download-wrapper">
          <span className="material-symbols-outlined download not-draggable">download</span>
        </div>
      </a>
      <button onClick={onClick}>
        <div className="modal-side-nav-download-wrapper">
          <span className="material-symbols-outlined download not-draggable">download</span>
        </div>
      </button>
    </div>
  );
};

export default test;
