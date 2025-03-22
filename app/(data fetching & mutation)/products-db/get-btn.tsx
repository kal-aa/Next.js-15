"use client";

import { useRouter } from "next/navigation";

export default function GetBtn() {
  const router = useRouter();

  return (
    <button
      className="border cursor-pointer"
      onClick={() => router.replace("/products-db")}
    >
      Fetch all
    </button>
  );
}
