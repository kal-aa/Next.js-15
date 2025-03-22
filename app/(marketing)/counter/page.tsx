import { Metadata } from "next";
import Counter from "../../../components/Counter";

export const metadata: Metadata = {
  title: { absolute: "counter" },
};

const Page = () => {
  return <Counter />;
};

export default Page;
