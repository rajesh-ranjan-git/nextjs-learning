"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const blogLinks = [
  { name: "First Blog", href: "/blog/first" },
  { name: "Second Blog", href: "/blog/second" },
  { name: "Third Blog", href: "/blog/third" },
];

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      {blogLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive ? "font-bold text-red-600 mr-4" : " text-blue-600 mr-4"
            }
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}
