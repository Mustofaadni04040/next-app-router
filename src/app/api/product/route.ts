import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike Air Max Dn",
    price: 1999000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e61080a2-fbe3-4bd9-917b-673bb10f6c73/air-max-dn-shoes-150FHN.png",
  },
  {
    id: 2,
    title: "Nike Air Max Dn Se",
    price: 1899000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd8662cc-1947-4ead-b02f-a474142e7430/air-max-dn-se-shoes-MZ6hPZ.png",
  },
  {
    id: 3,
    title: "Nike Pegasus EasyOn Blueprint",
    price: 2099000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c8294970-6e75-49cc-8334-dc15bb827a57/pegasus-easyon-blueprint-road-running-shoes-qsKFJB.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Product not found",
      data: {},
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({ status: 200, message: "Success", data: products });
}
