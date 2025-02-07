import Link from "next/link";

const Folder2 = () => {
  return (
    <div className="flex flex-col justify-around items-center w-screen h-[56vh] text-5xl">
      <h1>Folder 2</h1>
      <div className="flex justify-center items-center gap-10 w-screen text-2xl">
        <Link
          href={"/interceptedRoutes/folder2/folder21"}
          className="hover:border-white bg-white hover:bg-black p-2 border rounded-lg text-black hover:text-white transition-all ease-in-out"
        >
          Folder 21
        </Link>
        <Link
          href={"/interceptedRoutes/folder2/folder22"}
          className="hover:border-white bg-white hover:bg-black p-2 border rounded-lg text-black hover:text-white transition-all ease-in-out"
        >
          Folder 22
        </Link>
      </div>
    </div>
  );
};

export default Folder2;
