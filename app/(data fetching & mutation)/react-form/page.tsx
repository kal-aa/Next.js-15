"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/react-form/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price, description }),
      });

      if (response.ok) router.push("/products-db");
    } catch (error) {
      console.error("Error occured", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h1>Loading ...</h1>;

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 space-y-4 max-w-96 flex flex-col"
    >
      <label className="text-white bg-black">
        Title
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label className="text-white bg-black">
        Price
        <input
          type="text"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <label className="text-white bg-black">
        Description
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <button disabled={loading} type="submit">
        {loading ? "submitting.." : "Submit"}
      </button>
    </form>
  );
}
