import Image from "next/image";
import { wondersImages, WonderImage } from "../../wonders";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <div className="mx-auto p-2">
      <div></div>
      <Image
        alt={photo.name}
        src={photo.src}
        width={300}
        height={0}
        className="w-full object-cover aspect-square"
      />
      <div className="text-center bg-white py-4">
        <h1 className="tex-3xl font-bold my-4">{photo.name}</h1>
        <h3>{photo.photographer}</h3>
        <h3>{photo.src}</h3>
      </div>
    </div>
  );
}
