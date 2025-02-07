import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intercepted Routes",
};

const InterceptedRoutes = () => {
  return (
    <div className="flex flex-col justify-around items-center h-[56vh] text-5xl">
      <h1>Intercepted Routes</h1>
      <div className="flex justify-center items-center gap-10 text-2xl">
        <Link
          href={"/interceptedRoutes/folder3"}
          className="hover:border-white bg-white hover:bg-black p-2 border rounded-lg text-black hover:text-white transition-all ease-in-out"
        >
          Folder 3
        </Link>
      </div>
    </div>
  );
};

export default InterceptedRoutes;
