"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };

  return (
    <>
      <h1 className="heading">Order Product</h1>
      <button
        onClick={handleClick}
        className="my-10 mx-auto block bg-amber-800 text-white rounded-full py-3 hover:scale-95 px-2"
      >
        Place order
      </button>
    </>
  );
};

export default Page;
