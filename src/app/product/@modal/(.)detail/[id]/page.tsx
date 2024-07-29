import { getData } from "@/services/products";
import dynamic from "next/dynamic";
import Image from "next/image";

const Modal = dynamic(() => import("@/components/core/Modal"));

export default async function DetailProductPage({ params }: { params: any }) {
  const data = await getData(
    `http://localhost:3000/api/product/?id=${params.id}`
  );
  // console.log(data);
  return (
    <Modal>
      <Image
        src={data.detailProduct.image}
        alt=""
        className="w-full object-cover aspect-square col-span-2"
        width={200}
        height={200}
      />
      <div className="bg-white py-4 px-6">
        <h3>{data.detailProduct.name}</h3>
        <p>Price: {data.detailProduct.price}</p>
      </div>
    </Modal>
  );
}
