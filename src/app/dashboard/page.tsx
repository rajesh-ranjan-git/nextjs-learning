import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Dashboard" },
};

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/">Go to Home</Link>
    </>
  );
}

export function BarChart() {
  return (
    <>
      <h1>Bar Chart Page.</h1>
      <Link href="/">Go to Home</Link>
    </>
  );
}
