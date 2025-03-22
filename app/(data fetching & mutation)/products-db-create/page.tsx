"use client";

import Submit from "@/components/submit";
import { useActionState } from "react";
import { createProduct, FormState } from "../action/products";
import Form from "next/form";

export default function AddProductPage() {
  const initialState: FormState = { errors: {} };

  // if we need to pass the id to createProduct
  // editeCreateProduct = createProduct.bind(null, 3)
  const [state, formAction, isPending] = useActionState(
    createProduct, //then pass it to here, editCreateProduct instead of createProduct, and the id will be available for createProduct as a first argument
    initialState
  );

  return (
    <Form action={formAction} className="w-full max-w-xl mx-auto">
      <div className="p-4 space-y-4 flex flex-col mx-auto">
        <div>
          <label className="text-white bg-black block">
            Title
            <input type="text" name="title" />
          </label>
          {state.errors.title && (
            <p className="text-red-500">{state.errors.title}</p>
          )}
        </div>
        <div>
          <label className="text-white bg-black block">
            Price
            <input type="number" name="price" />
          </label>
          {state.errors.price && (
            <p className="text-red-500">{state.errors.price}</p>
          )}
        </div>
        <div>
          <label className="text-white bg-black block">
            Description
            <input type="text" name="description" />
          </label>
          {state.errors.description && (
            <p className="text-red-500">{state.errors.description}</p>
          )}
        </div>
        <Submit />
        {/*useFormStatus OR useActionState*/}
        <button
          type="submit"
          disabled={isPending}
          className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-600 cursor-pointer disabled:cursor-auto"
        >
          {isPending ? "submitting.." : "Submit"}
        </button>
      </div>
    </Form>
  );
}

// 'use server'
// async function createProduct(title: string, price: number, description?: string) {
//   const prisma = new PrismaClient();
//   await prisma.product.create({
//     data: { title, price, description },
//   });
// }

// export default function CreateProductForm() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     createProduct(formData.get('title'), formData.get('price'));  // Server action call
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <input name="title" placeholder="Product Title" />
//       <input name="price" placeholder="Product Price" />
//       <button type="submit">Create Product</button>
//     </Form>
//   );
// }
