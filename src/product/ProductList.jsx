import { useEffect, useRef } from "react";
import Product from "./Product.jsx";
import { useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    console.log("useEffect");
    
    if (loaded.current === false) {
      fetch("/product.json")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        })
        .then(() => {
          loaded.current = true;
        });
    }
  });
  return (
    <>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
