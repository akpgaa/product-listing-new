import React, { useEffect, useState } from "react";
import Content from "../component/content";
import DropdownComponent from "../component/Dropdown";
import { useMainContext } from "../context/main-context";
import CategoryComponent from "../component/CategoryComponent";

function HomePage() {
  const { value: data, loading } = useMainContext();
  if (loading) return <>Loading...</>;
  return (
    <>
      <CategoryComponent />
      <div class="row">
        <Content data={data} />
      </div>
    </>
  );
}

export default HomePage;
