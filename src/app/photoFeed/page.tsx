import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto container">
      <h1 className="my-4 font-bold text-3xl text-center">
        New Wonders of the World
      </h1>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-4 p-2">
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photoFeed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="rounded-lg w-full aspect-square object-cover hover:scale-105 transition-all ease-in-out"
            />

            <div className="p-4 text-2xl text-center">{name}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
