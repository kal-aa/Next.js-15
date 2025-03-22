import { addProduct } from "@/app/prisma-db";

export async function POST(request: Request) {
  const body = await request.json();
  const { title, price, description } = body;
  const product = await addProduct(title, parseInt(price), description);
  return Response.json(product, {
    headers: { "Content-Type": "application/json" },
  });
}
