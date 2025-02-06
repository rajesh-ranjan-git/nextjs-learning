import React from "react";

const ProductLayout = ({
  params,
  children,
}: {
  params: { productId: number; reviewId: number };
  children: React.ReactNode;
}) => {
  return (
    <>
      {children},
      <div className="flex justify-center items-center p-5 border-t-2 w-screen text-5xl">
        Product {params.productId}
      </div>
    </>
  );
};

export default ProductLayout;
