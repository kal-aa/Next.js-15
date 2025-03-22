"use client";

import Link from "next/link";
import DeleteButton from "./DeleteBtn";
import { deleteButtonQuery } from "../action/products";
import { useOptimistic } from "react";
import { Product } from "./page";
import Form from "next/form";

// export type Product = {
//   id: number;
//   title: string;
//   price: number;
//   description: string | null;
// };

export default function ProductDetail({ products }: { products: Product[] }) {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(products);

  const removeProductById = async (productId: number) => {
    setOptimisticProducts((prev) =>
      prev.filter((product) => product.id !== productId)
    );
    deleteButtonQuery(productId);
  };

  return (
    <>
      <ul className="space-y-4 p-4">
        {optimisticProducts.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            <div>
              <Link
                href={`/products-db/${product.id}`}
                className="text-xl font-semibold"
              >
                {product.title}
              </Link>
              <p>{product.description}</p>
              <p className="text-lg font-medium">${product.price}</p>
            </div>

            <Form action={removeProductById.bind(null, product.id)}>
              <DeleteButton />
            </Form>
          </li>
        ))}
      </ul>
    </>
  );
}
