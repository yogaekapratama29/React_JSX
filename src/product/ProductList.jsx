import { useEffect, useRef } from "react";
import Product from "./Product.jsx";
import { useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    setLoad(true);
  }

  // Use Effect with empty array untuk menjalankan efek sekali saja
  useEffect(() => {
    console.log("useEffect");
  },[]);

    // Menggunakan Promise
    //   useEffect(() => {
    //     console.log("useEffect with []");

    //     if (load) {
    //       fetch("/product.json")
    //         .then((response) => response.json())
    //         .then((data) => {
    //           setProducts(data);
    //         });
    //     }
    //   },[load]);

    // Menggunakan async await
    useEffect(()=> {
        async function fetchProduct(){
            const response = await fetch("/product.json");
            const data = await response.json();
            setProducts(data);
        }

        console.log("Load prosducts");
        if(load){
            fetchProduct();
        }
    },[load]);
  return (
    <>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load Products</button>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
