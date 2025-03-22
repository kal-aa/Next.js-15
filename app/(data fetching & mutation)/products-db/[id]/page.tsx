import { getProductd } from "@/app/prisma-db";
import { UpdateForm } from "./UpdateForm";
import { Product } from "../page";
import { notFound } from "next/navigation";

export default async function ProductUpdate({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product: Product | null = await getProductd(parseInt(id));

  if (!product) {
    notFound();
  }

  return <UpdateForm product={product} />;
}
