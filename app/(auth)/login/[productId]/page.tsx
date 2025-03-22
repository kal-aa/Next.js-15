import { use } from "react";

export default function Login({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = use(params);

  const getRandonInt = (num: number) => {
    return Math.floor(Math.random() * num);
  };

  const random = getRandonInt(2);

  if (random === 1) {
    throw new Error("Too bad, Error has occured");
  }

  return (
    <>
      <h1>{productId} has Logedin</h1>
    </>
  );
}
