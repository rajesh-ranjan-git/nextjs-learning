import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details",
  description: "This package is for learning Next JS.",
};

function getRandomInt(count: number): number {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading products...");
  }

  return (
    <>
      {children}
      <h1>This shows specific layout for Products.</h1>
    </>
  );
}
