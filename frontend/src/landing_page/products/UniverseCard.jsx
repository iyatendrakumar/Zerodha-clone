import React from "react";

function UniverseCard({ image, width, description }) {
  return (
    <div className="col-4 px-5 py-3 mt-5 ">
      <img src={image} style={{ width, marginBottom: "16px"}} alt="partner" />
      <p className="text-small text-muted">{description}</p>
    </div>
  );
}

export default UniverseCard;
