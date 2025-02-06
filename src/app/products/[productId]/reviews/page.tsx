import { notFound } from "next/navigation";

type Props = { params: { productId: number } };

export const generateMetadata = ({ params }: Props) => {
  return { title: `iPhone ${params.productId} Review` };
};

const Reviews = ({ params }: Props) => {
  if (params.productId > 16) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center w-screen h-[52vh] text-5xl">
      Reviews Page for Product {params.productId}
    </div>
  );
};

export default Reviews;
