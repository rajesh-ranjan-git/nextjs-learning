"use client";

import { notFound } from "next/navigation";

function getRandomInt(count: number): number {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error("Error loading review...");
  // }

  return (
    <h1>
      Review {params.reviewId} Details of Product {params.productId}
    </h1>
  );
}
