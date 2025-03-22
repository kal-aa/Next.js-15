import Image from "next/image";
import { wondersImages, WonderImage } from "../wonders";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <div className="mx-auto my-10">
      <div className="w-2/3 mx-auto">
        <div>
          <h1 className="text-center tex-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          width={300}
          height={0}
          className="w-full object-cover aspect-square"
        />
        <div className="bg-white py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.src}</h3>
        </div>
      </div>
    </div>
  );
}
