import React from "react";

type ProductPageProps = {
  params: {
    slug: string[];
  };
};

async function getData() {
  // const res = await fetch("https://fakestoreapi.com/products");
  const res = await fetch("http://localhost:3000/api/product");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductPage({ params }: ProductPageProps) {
  console.log(params);

  const products = await getData();
  console.log(products);
  return (
    <div>
      <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1>
      <div className="grid grid-cols-4 gap-5">
        {products.data.length > 0 &&
          products.data.map((product: any) => (
            <div
              className="w-full max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={product.id}
            >
              <a href="#">
                <img
                  className="rounded-t-lg object-center h-80 w-full"
                  src={product.image}
                  alt={product.title}
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                    {product.title}
                  </h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {product.price}$
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
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
