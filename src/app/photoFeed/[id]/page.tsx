import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <div className="mx-auto my-2 container">
      {photo ? (
        <div className="mx-auto w-1/4">
          <div>
            <h1 className="my-4 font-bold text-3xl text-center">
              {photo.name}
            </h1>
          </div>
          <Image
            alt={photo.name}
            src={photo.src}
            className="rounded-t-lg w-full aspect-square object-cover"
          />

          <div className="bg-white p-4 rounded-b-lg text-black">
            <h3>{photo.photographer}</h3>
            <h3 className="font-bold">{photo.location}</h3>
          </div>
        </div>
      ) : (
        <div className="mx-auto w-1/4">
          <div>
            <h1 className="my-4 font-bold text-3xl text-center">
              Photo not found!
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
