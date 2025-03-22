import { getProducts } from "@/app/prisma-db";
import ProductDetail from "./product-detail";
import GetBtn from "./get-btn";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDbPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);

  if (query && products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p>No Products associated to your search</p>
        <GetBtn />
      </div>
    );
  }

  if (!query && products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p>No Products available</p>
        <GetBtn />
      </div>
    );
  }

  return <ProductDetail products={products} />;
}
