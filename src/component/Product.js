import React from "react";
import { shortenWithEllipsis } from "../utils";
import StarRating from "./StarRating";

export default function Product({
  brand,
  price,
  thumbnail,
  description,
  rating,
}) {
  return (
    <div class="col-sm-6 col-md-3">
      <div class="card productcard">
        <div className="heart">
          <i className="fa fa-heart-o"></i>
        </div>
        <img
          src={thumbnail}
          class="card-img-top img-fluid productimage"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text nomargin " style={{ fontWeight: "bold" }}>
            {brand}
          </p>
          <p class="card-text nomargin">
            <small class="text-muted">
              {shortenWithEllipsis(description, 50)}
            </small>
          </p>

          <p class="card-text nomargin" style={{ fontWeight: "bold" }}>
            ${price}
          </p>
          <div class="d-flex justify-content-between">
            <div class="text-warning">
              <StarRating numberOfStars={parseInt(rating)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
