"use client";

import { useFormStatus } from "react-dom";

export default function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={
        pending
          ? "bg-gray-600 text-white rounded-lg p-2 cursor-progress"
          : "bg-black text-white rounded-lg p-2 hover:scale-95 cursor-pointer"
      }
    >
      {pending ? "deleting" : "Delete"}
    </button>
  );
}
