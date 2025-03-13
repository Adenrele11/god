import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function Featured() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <>
      <div className="mt-5 mx-5">
        <div className="main">
          <h1 className="text-[20px] font-bold">Featured</h1>
          {/* <Link>See All</Link> */}
        </div>
        <div className=" grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 ">
          {products.map((product) => (
            <div className="bg-[#F8F7F7] p-3 rounded-lg" key={product.id}>
              <img className="w-20 h-20" src={product.image} alt="" />
              <h1 className="font-bold">Name : {product.title}</h1>
              <h1 className="text-[#6055D8]">Price: {product.price}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Featured;
