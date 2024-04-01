import React, { useEffect, useState } from "react";
import Content from "../component/content";
import DropdownComponent from "../component/Dropdown";
import ProductAPI from "../modules/ProductAPI";
import { useMainContext } from "../context/main-context";

function CategoryComponent() {
  const { setValue, getAllProducts } = useMainContext();
  const [options, setOptions] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const result = await ProductAPI.getAllCategories();
      setOptions(result);
    }
    getProducts();
  }, []);

  const handleSelect = async (option) => {
    if (!option) return getAllProducts();
    const result = await ProductAPI.getProductByCategory(option);
    setValue(result);
  };
  return (
    <div class="col-sm-6 col-md-3 " style={{ padding: 10 }}>
      <DropdownComponent options={options} onSelect={handleSelect} />
    </div>
  );
}

export default CategoryComponent;
