import { notFound } from "next/navigation";

type Props = { params: { productId: number; reviewId: number } };

export const generateMetadata = ({ params }: Props) => {
  return { title: `iPhone ${params.productId} Review ${params.reviewId}` };
};

const getRandomNumber = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ReviewDetails = ({ params }: Props) => {
  const randomNumber = getRandomNumber(2);

  if (randomNumber === 1) {
    throw new Error("Error occurred while loading review details!");
  }

  if (params.productId > 16) {
    notFound();
  }

  if (params.reviewId > 10) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center w-screen h-[43.5vh] text-5xl">
      Review {params.reviewId} for iPhone {params.productId}
    </div>
  );
};

export default ReviewDetails;
