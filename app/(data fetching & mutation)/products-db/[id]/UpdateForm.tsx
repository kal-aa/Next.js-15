"use client";

import Submit from "@/components/submit";
import { FormState, updateProductAction } from "../../action/products";
import { Product } from "../page";
import { useActionState } from "react";

const bi = (id: number, fD: object) => {
  console.log(id, fD);
};

const editBi = bi.bind(null, 3, { title: "hi" });
editBi();

export const UpdateForm = ({ product }: { product: Product }) => {
  const initialState: FormState = { errors: {} };

  const editUpdateProductAction = updateProductAction.bind(null, product.id);
  const [state, formAction] = useActionState(
    editUpdateProductAction,
    initialState
  );

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96 flex flex-col">
      <div>
        <label className="text-white bg-black">
          Title
          <input type="text" name="title" defaultValue={product.title} />
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>

      <div>
        <label className="text-white bg-black">
          Price
          <input type="number" name="price" defaultValue={product.price} />
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>

      <div>
        <label className="text-white bg-black">
          Description
          <input
            type="text"
            name="description"
            defaultValue={product.description ?? ""}
          />
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>

      <Submit />
    </form>
  );
};
