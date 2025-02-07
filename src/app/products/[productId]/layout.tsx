import { Metadata } from "next";

type Props = {
  params: {
    productId: number;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    resolve(`iPhone ${params.productId}`);
  });

  return {
    title: `${title}`,
  };
};

const ProductLayout = ({
  params,
  children,
}: {
  params: { productId: number; reviewId: number };
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <div className="flex justify-center items-center p-5 border-t-2 text-5xl">
        Product {params.productId}
      </div>
    </>
  );
};

export default ProductLayout;
