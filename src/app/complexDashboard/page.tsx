import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complex Dashboard",
};

export default function ComplexDashboard() {
  return (
    <>
      <h1>Complex Dashboard</h1>
      <Link href="/">Go to Home</Link>
    </>
  );
}
