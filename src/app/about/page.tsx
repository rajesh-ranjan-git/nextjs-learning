import Link from "next/link";

export const metadata = {
  title: "About Page",
};

export default function About() {
  return (
    <>
      <h1>Welcome to About page !</h1>
      <Link href="/">Go To Home</Link>
    </>
  );
}
