import Link from "next/link";
import { wondersImages } from "./wonders";
import Image from "next/image";

export default function Page() {
  return (
    <main className="mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wondersImages.map(({ id, src, name }) => (
          <Link
            key={id}
            href={`/photo-feed/${id}`}
            className="rounded-full overflow-hidden  cursor-pointer"
          >
            <Image
              width={400}
              height={0}
              alt={name}
              src={src}
              className="w-full object-center aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
