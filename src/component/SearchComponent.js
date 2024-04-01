import React, { useCallback, useEffect, useState } from "react";
import Content from "../component/content";
import DropdownComponent from "../component/Dropdown";
import ProductAPI from "../modules/ProductAPI";
import { useMainContext } from "../context/main-context";
import { debounce } from "../utils";

function SearchComponent() {
  const { setValue, getAllProducts } = useMainContext();
  const [search, setSearch] = useState("");

  const searchProduct = async (keyword) => {
    if (!keyword) return getAllProducts();
    const result = await ProductAPI.searchProduct(keyword);
    setValue(result);
  };

  const optimizedFn = useCallback(debounce(searchProduct), []);

  async function handleSearch(value) {
    setSearch(value.target.value);
    optimizedFn(value.target.value);
  }

  return (
    <input
      type="text"
      id="myInput"
      class="form-control"
      placeholder="Search"
      aria-label="Username"
      value={search}
      onChange={handleSearch}
      aria-describedby="basic-addon1"
    />
  );
}

export default SearchComponent;
