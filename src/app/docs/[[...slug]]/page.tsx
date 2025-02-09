"use client";

import { notFound, useRouter } from "next/navigation";

const Docs = ({ params }: { params: { slug: String[] } }) => {
  const router = useRouter();

  if (params.slug?.length === 1) {
    return (
      <div className="flex justify-center items-center h-[56vh] text-5xl">
        Viewing Docs for feature {params.slug[0]}
      </div>
    );
  } else if (params.slug?.length === 2) {
    return (
      <div className="flex justify-center items-center h-[56vh] text-5xl">
        Viewing Docs for feature {params.slug[0]} and concept {params.slug[1]}
      </div>
    );
  } else if (params.slug?.length >= 3) {
    notFound();
  }

  const handleFeature = () => {
    router.push("/docs/newFeature");
  };

  const handleConcept = () => {
    router.push("/docs/newFeature/newConcept");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-[56vh]">
      <span className="text-5xl">Documentation Page</span>
      <div className="flex justify-center items-center gap-4">
        <button
          className="hover:border-white bg-white hover:bg-black p-2 border rounded-lg text-black text-xl hover:text-white transition-all ease-in-out"
          onClick={handleFeature}
        >
          New Feature
        </button>
        <button
          className="hover:border-white bg-white hover:bg-black p-2 border rounded-lg text-black text-xl hover:text-white transition-all ease-in-out"
          onClick={handleConcept}
        >
          New Concept
        </button>
      </div>
    </div>
  );
};

export default Docs;
