import Counter from "@/components/Counter";
import { Search } from "@/components/Search";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="text-center">
        <div className="">Home page</div>
        <Search />
        <Image
          src="/next.svg"
          alt="Next"
          width={300}
          height={30}
          className="mx-auto"
          priority
        />
        <Counter />
        <Link
          href="/products-db-create"
          className="underline text-blue-300 hover:text-black"
        >
          Create Products
        </Link>
        <hr className="mx-8" />
        <Link
          href="/revenue"
          className="underline text-blue-300 hover:text-black"
        >
          revenue
        </Link>
        <hr />
        <Link href="/articles/bn-123/?lang=en">Read in English</Link>
        <br />
        <Link href="/articles/bn-123/?lang=fr">Read in French</Link>
      </div>
    </>
  );
};

export default page;
