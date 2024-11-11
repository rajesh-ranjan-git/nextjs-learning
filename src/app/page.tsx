import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to Next JS Learning !</h1>
      <Link href="/about">Go to About</Link>
      <br />
      <Link href="/blog">Go to Blog</Link>
      <br />
      <Link href="/products">Go to Products</Link>
      <br />
      <Link href="/orderProducts">Go to Order Products</Link>
      <br />
      <Link href="/profile">Go to Profile</Link>
      <br />
      <Link href="/dashboard">Go to Dashboard</Link>
      <br />
      <Link href="/complexDashboard">Go to Complex Dashboard</Link>
    </>
  );
}
