import React from "react";
import SearchComponent from "./SearchComponent";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg  " style={{ padding: 10 }}>
      <a class="navbar-brand searchInput" href="#">
        MaBooM
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <nav class="navbar ">
        <form class="form-inline">
          <div class="input-group searchInput">
            <SearchComponent />
          </div>
        </form>
      </nav>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link textGrey" href="#">
              Store
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link textGrey" href="#">
              Account
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link textGrey" href="#">
              Wishlist
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
