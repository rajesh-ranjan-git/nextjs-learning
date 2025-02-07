import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/photoFeed/wonders";
import Modal from "@/components/modal/modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="rounded-t-lg w-full aspect-square object-cover"
      />

      <div className="bg-white p-4 rounded-b-lg text-black">
        <h2 className="font-semibold text-xl">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
