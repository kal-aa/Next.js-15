import { use } from "react";

const Page = ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = use(params);

  return <h1 className="heading">Welcome user {userId}</h1>;
};

export default Page;
