"use server";

import { addProduct, deleteProduct, updateProduct } from "@/app/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

export async function createProduct(
  // you can access a .bind(null, x) here as the 1st argument if you've passed one
  previousState: FormState, // this is by default sent from the useActionState
  formData: FormData
) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};
  if (!title) {
    errors.title = "Title is required";
  }
  if (!price) {
    errors.price = "Price is required";
  }
  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addProduct(title, parseFloat(price), description);
  redirect("/products-db");
}

export async function updateProductAction(
  id: number,
  previousState: FormState,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const price = parseFloat(formData.get("price") as string);
  const description = formData.get("description") as string;

  const errors: Errors = {};
  if (!title) {
    errors.title = "Title is required";
  }
  if (!price) {
    errors.price = "Price is required";
  }
  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await updateProduct(id, title, price, description);
  redirect("/products-db");
}

export async function deleteButtonQuery(id: number) {
  await deleteProduct(id);
  revalidatePath("/products-db");
}
