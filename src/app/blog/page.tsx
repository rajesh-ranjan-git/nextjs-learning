import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Blog" },
};

export default function Blog() {
  return (
    <>
      <h1>Welcome to Blog page !</h1>
      <Link href="/blog/first">Go to First Blog Page</Link>
      <br />
      <Link href="/blog/second">Go to Second Blog Page</Link>
      <br />
      <Link href="/blog/third">Go to Third Blog Page</Link>
      <br />
      <Link href="/">Go to Home</Link>
    </>
  );
}
