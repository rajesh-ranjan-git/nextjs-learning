import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs",
};

const Docs = ({ params }: { params: { slug: String[] } }) => {
  if (params.slug?.length === 1) {
    return (
      <div className="flex justify-center items-center h-[62vh] text-5xl">
        Viewing Docs for feature {params.slug[0]}
      </div>
    );
  } else if (params.slug?.length === 2) {
    return (
      <div className="flex justify-center items-center h-[62vh] text-5xl">
        Viewing Docs for feature {params.slug[0]} and concept {params.slug[1]}
      </div>
    );
  } else if (params.slug?.length >= 3) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center h-[56vh] text-5xl">
      Documentation Page
    </div>
  );
};

export default Docs;
