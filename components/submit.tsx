"use client";

import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending: isPending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={isPending}
      className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-600 cursor-pointer disabled:cursor-auto"
    >
      {isPending ? "submitting.." : "Submit"}
    </button>
  );
}
