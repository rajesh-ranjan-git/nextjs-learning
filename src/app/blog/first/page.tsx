import Link from "next/link";

export default function BlogFirst() {
  return (
    <>
      <h1>Welcome to First Blog page !</h1>
      <Link href="/blog">Go Back</Link>
    </>
  );
}
