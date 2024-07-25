import { getData } from "@/services/products";
import Link from "next/link";
import React from "react";

type ProductPageProps = {
  params: {
    slug: string[];
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  // console.log(params);

  const products = await getData("http://localhost:3000/api/product");
  // console.log(products);

  return (
    <div className="container px-5 mx-auto">
      <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {/* {products.data.length > 0 && api local */}
        {products.data.length > 0 &&
          products.data.map((product: any) => (
            <Link
              href={`/product/detail/${product.id}`}
              className="w-full max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={product.id}
            >
              <img
                className="rounded-t-lg object-center h-80 w-full"
                src={product.image}
                alt={product.title}
              />
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {product.name}
                </h5>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {product.price}
                  </span>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
      </div>
      {params.slug && (
        <>
          <p>Category: {params.slug[0]}</p>
          <p>Gender: {params.slug[1]}</p>
          <p>Id: {params.slug[2]}</p>
        </>
      )}
    </div>
  );
}
