import React from "react";
import Product from "./Product";
import Alert from "./alert";

export default function Content({ data }) {
  if (data.length == 0) return <Alert />;
  return (
    <>
      {data.map((item) => (
        <Product
          key={item.id}
          brand={item.brand}
          price={item.discountPercentage}
          thumbnail={item.thumbnail}
          description={item.description}
          rating={item.rating}
        />
      ))}
    </>
  );
}
