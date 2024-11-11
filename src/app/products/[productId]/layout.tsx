import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details",
  description: "This package is for learning Next JS.",
};

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h1>This shows specific layout for Products.</h1>
    </>
  );
}
