import { getData } from "@/services/products";

export default async function DetailProductPage({ params }: { params: any }) {
  const data = await getData(
    `http://localhost:3000/api/product/?id=${params.id}`
  );
  console.log(data);
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-slate-200 rounded-lg shadow-lg">
        <img
          src={data.detailProduct.image}
          alt=""
          className="w-full object-cover aspect-square col-span-2"
        />
        <div className="bg-white py-4 px-6">
          <h3>{data.detailProduct.title}</h3>
          <p>Price: {data.detailProduct.price}$</p>
        </div>
      </div>
    </div>
  );
}
