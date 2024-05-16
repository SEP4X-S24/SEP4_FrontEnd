import React, { useState, useEffect } from "react";
import "./Banner.css";
import outfitImage from "../../../../images/recommendation-banner.webp";
import Recommendation from "../../../../models/Recommendation";

function Banner({ recommendation }: { recommendation: Recommendation | null }) {
  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-4">
            We suggest you
          </h1>
          {/* Conditionally render recommendation description */}
          {recommendation ? (
            <p className="lead">{recommendation.description}</p>
          ) : (
            <p className="lead">Loading...</p>
          )}
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg image-container">
          <img className="rounded-lg-3" src={outfitImage} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Banner;
